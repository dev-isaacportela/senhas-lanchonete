import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Plus, Minus, Trash2, Send, CheckCircle2, FileText, User, Tag, Clock, Calendar, Phone, AlertCircle, CreditCard, DollarSign, QrCode, Copy, Check, X, Printer } from 'lucide-react';

// Função utilitária oficial do Banco Central (BACEN) para geração de Payload PIX (BR Code EMV) + CRC16
function gerarPayloadPix({ chave, nome, cidade, valor, txtId = '***' }) {
  if (!chave) return '';
  const cleanChave = String(chave).trim();
  const cleanNome = String(nome || 'Festa do Morango').trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 25);
  const cleanCidade = String(cidade || 'SAO PAULO').trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 15).toUpperCase();
  const valStr = Number(valor || 0).toFixed(2);

  function formatField(id, value) {
    const len = value.length.toString().padStart(2, '0');
    return `${id}${len}${value}`;
  }

  const gui = formatField('00', 'br.gov.bcb.pix');
  const keyField = formatField('01', cleanChave);
  const merchantAccountInfo = formatField('26', `${gui}${keyField}`);

  const mcc = formatField('52', '0000');
  const currency = formatField('53', '986');
  const amount = formatField('54', valStr);
  const country = formatField('58', 'BR');
  const nameField = formatField('59', cleanNome);
  const cityField = formatField('60', cleanCidade);

  const txIdSubfield = formatField('05', txtId || '***');
  const addDataField = formatField('62', txIdSubfield);

  const payloadSemCRC = `000201${merchantAccountInfo}${mcc}${currency}${amount}${country}${nameField}${cityField}${addDataField}6304`;

  let crc = 0xFFFF;
  for (let i = 0; i < payloadSemCRC.length; i++) {
    crc ^= (payloadSemCRC.charCodeAt(i) << 8);
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ 0x1021) & 0xFFFF;
      } else {
        crc = (crc << 1) & 0xFFFF;
      }
    }
  }
  const crcHex = (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
  return `${payloadSemCRC}${crcHex}`;
}

export default function CaixaView({
  socket,
  menu,
  operador,
  onEnviarPedido,
  onReservarItem,
  onLiberarItem,
  onLiberarCarrinho
}) {
  const [cliente, setCliente] = useState('');
  const [carrinho, setCarrinho] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState('todas');
  const [sucessoMsg, setSucessoMsg] = useState(null);
  const [erroEstoque, setErroEstoque] = useState(null);

  // Último pedido fechado, para o caixa conseguir imprimir o comprovante
  // depois de enviar. Fica na tela até o próximo pedido ou até ser fechado.
  const [ultimoPedido, setUltimoPedido] = useState(null);
  const [statusImpressao, setStatusImpressao] = useState(null);
  const imprimindoRef = useRef(false);
  const [mobileTab, setMobileTab] = useState('cardapio'); // cardapio | carrinho

  // Estado de Forma de Pagamento, Telefone e Data
  const [formaPagamento, setFormaPagamento] = useState('pix');
  const [telefoneCliente, setTelefoneCliente] = useState('');
  const [dataCobranca, setDataCobranca] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7); // Padrão 7 dias para cobrança de fiado
    return d.toISOString().split('T')[0];
  });

  // Configuração da Chave PIX e Modal de QR Code
  const [pixConfig, setPixConfig] = useState(null);
  const [modalPixAberto, setModalPixAberto] = useState(false);
  const [pixCopiado, setPixCopiado] = useState(false);

  useEffect(() => {
    fetch('/api/pix-config')
      .then(res => res.json())
      .then(dados => setPixConfig(dados))
      .catch(err => console.error('Erro ao carregar chave PIX:', err));
  }, []);

  // Normalização segura de Produtos e Categorias
  const listaProdutos = Array.isArray(menu) ? menu : (menu && Array.isArray(menu.produtos) ? menu.produtos : []);
  const listaCategorias = menu && Array.isArray(menu.categorias) ? menu.categorias : [];

  const getCatNome = (prod) => {
    if (prod.categoria) return prod.categoria;
    const catObj = listaCategorias.find(c => c.id === prod.categoriaId);
    return catObj ? catObj.nome : 'Geral';
  };

  const categorias = ['todas', ...new Set(listaProdutos.map(p => getCatNome(p)))];

  // Situação de estoque do produto, já descontando as reservas de todos os
  // caixas. Produto sem controle de estoque é sempre ilimitado.
  const infoEstoque = (produto) => {
    if (!produto || !produto.controlaEstoque) {
      return { controla: false, disponivel: Infinity, esgotado: false, acabando: false };
    }

    const disponivel = typeof produto.disponivelEstoque === 'number'
      ? produto.disponivelEstoque
      : Math.max(0, (produto.estoque || 0) - (produto.reservado || 0));

    return {
      controla: true,
      disponivel,
      esgotado: disponivel <= 0,
      acabando: disponivel > 0 && disponivel <= (produto.estoqueMinimo || 0)
    };
  };

  // Reserva no servidor e só então mexe no carrinho. Em rede local a latência
  // é irrelevante e isso evita o carrinho mentir sobre disponibilidade.
  const reservar = (produtoId, quantidade, aoConfirmar) => {
    if (!onReservarItem) {
      aoConfirmar();
      return;
    }

    onReservarItem(produtoId, quantidade, (resposta) => {
      if (resposta && resposta.ok) {
        setErroEstoque(null);
        aoConfirmar();
      } else {
        const prod = listaProdutos.find(p => p.id === produtoId);
        setErroEstoque({
          titulo: `Sem estoque suficiente de "${prod?.nome || 'produto'}"`,
          itens: [{
            nome: prod?.nome || produtoId,
            disponivel: resposta?.disponivel ?? 0
          }]
        });
      }
    });
  };

  const liberar = (produtoId, quantidade) => {
    if (onLiberarItem) onLiberarItem(produtoId, quantidade);
  };

  // Adicionar item ao carrinho
  const adicionarAoCarrinho = (produto) => {
    const situacao = infoEstoque(produto);
    if (situacao.esgotado) return;

    reservar(produto.id, 1, () => {
      setCarrinho(prev => {
        const existe = prev.find(item => item.id === produto.id);
        if (existe) {
          return prev.map(item =>
            item.id === produto.id
              ? { ...item, quantidade: item.quantidade + 1 }
              : item
          );
        }
        return [...prev, { ...produto, quantidade: 1, observacao: '' }];
      });
    });
  };

  // Alterar quantidade: o + reserva mais uma unidade, o - devolve
  const alterarQuantidade = (produtoId, delta) => {
    const aplicar = () => {
      setCarrinho(prev => {
        return prev.map(item => {
          if (item.id === produtoId) {
            const novaQtd = item.quantidade + delta;
            return novaQtd > 0 ? { ...item, quantidade: novaQtd } : null;
          }
          return item;
        }).filter(Boolean);
      });
    };

    if (delta > 0) {
      reservar(produtoId, delta, aplicar);
    } else {
      liberar(produtoId, Math.abs(delta));
      aplicar();
    }
  };

  // Atualizar observação do item
  const atualizarObservacao = (produtoId, obs) => {
    setCarrinho(prev =>
      prev.map(item => item.id === produtoId ? { ...item, observacao: obs } : item)
    );
  };

  // Remover item (devolve a reserva inteira daquele produto)
  const removerDoCarrinho = (produtoId) => {
    const item = carrinho.find(i => i.id === produtoId);
    if (item) liberar(produtoId, item.quantidade);
    setCarrinho(prev => prev.filter(i => i.id !== produtoId));
  };

  // Limpar carrinho devolve tudo que este caixa estava segurando
  const limparCarrinho = () => {
    if (onLiberarCarrinho) onLiberarCarrinho();
    setCarrinho([]);
    setErroEstoque(null);
  };

  // Sair da tela do caixa não pode deixar reserva órfã presa até o TTL
  useEffect(() => {
    return () => {
      if (onLiberarCarrinho) onLiberarCarrinho();
    };
  }, []);

  /*
   * Imprime o comprovante do cliente do pedido recém-fechado.
   *
   * Sai como primeira via, sem a marca de 2a VIA, e funciona mesmo com a
   * impressão automática desligada na configuração. O ref é o que trava o
   * clique duplo: `disabled` só vale depois do re-render do React.
   */
  const imprimirComprovante = () => {
    if (!ultimoPedido || imprimindoRef.current) return;

    imprimindoRef.current = true;
    setStatusImpressao({ tipo: 'enviando', texto: 'Enviando para a impressora...' });

    fetch(`/api/orders/${ultimoPedido.id}/imprimir`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        vias: { cliente: true, cozinha: false },
        operadorNome: operador ? operador.nome : 'Caixa'
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.status === 'success') {
          setStatusImpressao({ tipo: 'ok', texto: 'Comprovante enviado para a impressora.' });
        } else {
          setStatusImpressao({ tipo: 'erro', texto: data?.error || 'Não foi possível imprimir.' });
        }
      })
      .catch(() => {
        setStatusImpressao({ tipo: 'erro', texto: 'Erro de conexão ao imprimir.' });
      })
      .finally(() => {
        imprimindoRef.current = false;
      });
  };

  // Calcular total do pedido
  const totalCalculado = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
  const totalItensQtd = carrinho.reduce((sum, item) => sum + item.quantidade, 0);

  // Gerar Payload PIX Oficial
  const payloadPixAtual = pixConfig?.chavePix ? gerarPayloadPix({
    chave: pixConfig.chavePix,
    nome: pixConfig.nomeBeneficiario,
    cidade: pixConfig.cidadeBeneficiario,
    valor: totalCalculado
  }) : '';

  const copiarPixCopiaCola = () => {
    if (payloadPixAtual) {
      navigator.clipboard.writeText(payloadPixAtual);
      setPixCopiado(true);
      setTimeout(() => setPixCopiado(false), 3000);
    }
  };

  // Enviar pedido para a cozinha
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!cliente.trim()) {
      alert('Por favor, informe o NOME DO CLIENTE.');
      return;
    }
    if (carrinho.length === 0) {
      alert('O carrinho está vazio! Adicione pelo menos um item.');
      return;
    }

    if (formaPagamento === 'pagar_depois') {
      if (!telefoneCliente.trim()) {
        alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar o TELEFONE / WHATSAPP do cliente!');
        return;
      }
      if (!dataCobranca) {
        alert('Para a opção "Pagar Depois", é OBRIGATÓRIO informar a DATA DE COBRANÇA!');
        return;
      }
    }

    const novoPedido = {
      cliente: cliente.trim(),
      criadoPor: operador ? operador.nome : 'Caixa',
      itens: carrinho.map(item => ({
        id: item.id,
        nome: item.nome,
        preco: item.preco,
        quantidade: item.quantidade,
        observacao: item.observacao || ''
      })),
      total: totalCalculado,
      formaPagamento,
      telefoneCliente: formaPagamento === 'pagar_depois' ? telefoneCliente.trim() : (telefoneCliente.trim() || undefined),
      dataCobranca: formaPagamento === 'pagar_depois' ? dataCobranca : undefined
    };

    // O carrinho NUNCA é apagado numa falha: o caixa precisa poder corrigir
    // o item problemático e reenviar sem remontar o pedido do zero.
    const tratarResposta = (resposta) => {
      if (resposta && resposta.erro === 'estoque_insuficiente') {
        setErroEstoque({
          titulo: 'Estoque insuficiente para fechar o pedido',
          itens: (resposta.itensIndisponiveis || []).map(i => ({
            nome: i.nome,
            pedido: i.pedido,
            disponivel: i.disponivel
          }))
        });
        setModalPixAberto(false);
        setMobileTab('carrinho');
        return;
      }

      if (resposta && resposta.error) {
        alert(resposta.error);
        return;
      }

      const pedidoCriado = resposta?.order || resposta?.pedido || null;
      const numOrder = pedidoCriado?.numero || 'OK';

      setSucessoMsg(`Pedido #${numOrder} enviado para a cozinha!`);
      if (pedidoCriado?.id) {
        setUltimoPedido(pedidoCriado);
        setStatusImpressao(null);
      }
      setErroEstoque(null);
      setModalPixAberto(false);
      setCliente('');
      setTelefoneCliente('');
      setCarrinho([]);
      setFormaPagamento('pix');
      setMobileTab('cardapio');
      setTimeout(() => setSucessoMsg(null), 4000);
    };

    const enviarFn = onEnviarPedido || (socket ? ((data, cb) => socket.emit('criar_pedido', data, cb)) : null);

    if (enviarFn) {
      enviarFn(novoPedido, tratarResposta);
    } else {
      fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoPedido)
      })
        .then(res => res.json())
        .then(tratarResposta)
        .catch(err => {
          console.error('Erro ao enviar pedido:', err);
          alert('Erro ao comunicar com o servidor.');
        });
    }
  };

  const produtosFiltrados = listaProdutos.filter(p => {
    const disponivel = p.disponivel !== false && p.ativo !== false;
    const catNome = getCatNome(p);
    const bateCategoria = categoriaAtiva === 'todas' || catNome === categoriaAtiva || p.categoriaId === categoriaAtiva;
    return disponivel && bateCategoria;
  });

  return (
    <div className="caixa-container">
      <style>{`
        .caixa-container {
          display: grid;
          grid-template-columns: 1fr 440px;
          gap: 1.25rem;
          min-height: calc(100dvh - 110px);
        }

        .mobile-view-toggle {
          display: none;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          background: var(--app-surface-1);
          padding: 0.35rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--app-border);
          margin-bottom: 0.75rem;
          position: sticky;
          top: 0;
          z-index: 40;
        }

        .mobile-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.6rem;
          border: none;
          background: transparent;
          color: var(--app-ink-muted);
          font-weight: 700;
          font-size: 0.9rem;
          border-radius: var(--radius-md);
          cursor: pointer;
        }

        .mobile-toggle-btn.active {
          background: var(--primary);
          color: var(--on-primary);
        }

        .mobile-cart-float-bar {
          display: none;
          position: fixed;
          bottom: 4.8rem;
          left: 0.75rem;
          right: 0.75rem;
          background: var(--primary);
          color: var(--on-primary);
          padding: 0.85rem 1.2rem;
          border-radius: var(--radius-pill);
          font-weight: 700;
          font-size: 0.95rem;
          justify-content: space-between;
          align-items: center;
          z-index: 90;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .caixa-container {
            grid-template-columns: 1fr;
            display: flex;
            flex-direction: column;
          }

          .mobile-view-toggle {
            display: grid;
          }

          .caixa-carrinho-col {
            padding-bottom: 6rem !important;
          }

          .caixa-cardapio-col.mobile-hidden,
          .caixa-carrinho-col.mobile-hidden {
            display: none !important;
          }

          .mobile-cart-float-bar.mobile-show-float {
            display: flex !important;
          }
        }

        .caixa-cardapio-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cat-pills {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          -webkit-overflow-scrolling: touch;
        }

        .cat-btn {
          padding: 0.55rem 1.1rem;
          border-radius: var(--radius-pill);
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          color: var(--app-ink);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          white-space: nowrap;
          transition: all 130ms ease;
          min-height: 40px;
        }

        .cat-btn.active {
          background: var(--primary);
          color: var(--on-primary);
          border-color: var(--primary);
        }

        .produtos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 0.85rem;
        }

        .prod-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 0.9rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.75rem;
          cursor: pointer;
          transition: border-color 130ms ease, background 130ms ease;
          min-height: 140px;
          -webkit-tap-highlight-color: transparent;
        }

        .prod-card:hover {
          border-color: var(--primary);
          background: var(--app-surface-2);
        }

        .prod-card-esgotado {
          opacity: 0.45;
          cursor: not-allowed;
          filter: grayscale(0.7);
        }

        .prod-card-esgotado:hover {
          border-color: var(--app-border);
          background: var(--app-surface-1);
        }

        .prod-card-esgotado .prod-add-btn {
          background: var(--app-ink-muted);
          cursor: not-allowed;
        }

        .estoque-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-pill);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .estoque-ok {
          background: rgba(22, 163, 74, 0.14);
          color: var(--status-pronto);
          border: 1px solid var(--status-pronto);
        }

        .estoque-acabando {
          background: rgba(230, 134, 25, 0.16);
          color: var(--status-preparo);
          border: 1px solid var(--status-preparo);
        }

        .estoque-esgotado {
          background: rgba(250, 15, 0, 0.16);
          color: var(--primary);
          border: 1px solid var(--primary);
        }

        .painel-comprovante {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-left: 4px solid var(--primary);
          border-radius: var(--radius-md);
          padding: 0.8rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .aviso-estoque {
          background: rgba(250, 15, 0, 0.12);
          border: 1px solid var(--primary);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .aviso-estoque-titulo {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-weight: 800;
          color: var(--primary);
          font-size: 0.92rem;
        }

        .aviso-estoque-lista {
          margin: 0;
          padding-left: 1.4rem;
          font-size: 0.85rem;
          color: var(--app-ink);
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .prod-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-title);
          line-height: 1.25;
        }

        .prod-cat {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: inline-block;
          margin-bottom: 0.2rem;
        }

        .prod-desc {
          font-size: 0.82rem;
          color: var(--app-ink-muted);
          line-height: 1.35;
          margin-top: 0.35rem;
        }

        .prod-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 0.4rem;
        }

        .prod-preco {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--status-pronto);
        }

        .prod-add-btn {
          background: var(--primary);
          color: var(--on-primary);
          border: none;
          border-radius: var(--radius-md);
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        /* Carrinho Panel */
        .caixa-carrinho-col {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: fit-content;
        }

        .carrinho-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--app-border);
          padding-bottom: 0.75rem;
        }

        .carrinho-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--text-title);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cliente-input-box {
          background: var(--app-canvas);
          border: 2px solid var(--primary);
          border-radius: var(--radius-md);
          padding: 0.65rem 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .cliente-input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-title);
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          width: 100%;
        }

        .carrinho-itens {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-right: 0.3rem;
          min-height: 160px;
        }

        .carrinho-item {
          background: var(--app-surface-2);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .item-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .item-nome {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-title);
        }

        .item-qtd-ctrl {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--app-canvas);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--app-border);
        }

        .qtd-btn {
          background: none;
          border: none;
          color: var(--app-ink);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.3rem;
          border-radius: var(--radius-sm);
          min-width: 32px;
          min-height: 32px;
        }

        .qtd-val {
          font-weight: 700;
          font-size: 0.95rem;
          min-width: 22px;
          text-align: center;
          color: var(--text-title);
        }

        .item-preco {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--status-pronto);
        }

        .obs-input {
          background: var(--app-canvas);
          border: 1px dashed var(--app-border);
          border-radius: var(--radius-sm);
          padding: 0.35rem 0.5rem;
          font-size: 0.82rem;
          color: var(--text-title);
          width: 100%;
          outline: none;
        }

        /* Grid de Forma de Pagamento */
        .pgto-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem;
        }

        .pgto-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.5rem 0.6rem;
          border-radius: var(--radius-md);
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          color: var(--app-ink);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          min-height: 40px;
        }

        .pgto-btn.active {
          background: var(--primary);
          color: var(--on-primary);
          border-color: var(--primary);
        }

        .pgto-btn.pagar-depois.active {
          background: var(--status-preparo);
          color: #ffffff;
          border-color: var(--status-preparo);
        }

        .carrinho-footer {
          border-top: 1px solid var(--app-border);
          padding-top: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .total-label {
          font-size: 1rem;
          font-weight: 700;
          color: var(--app-ink-muted);
        }

        .total-value {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--status-pronto);
        }

        .btn-enviar {
          width: 100%;
          padding: 0.9rem;
          font-size: 1.05rem;
        }

        /* Modal Overlay PIX */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 300;
          padding: 1rem;
        }

        .modal-card-pix {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 440px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          text-align: center;
        }
      `}</style>

      {/* Alternador Mobile de Telas (Cardápio x Comanda) */}
      <div className="mobile-view-toggle">
        <button
          className={`mobile-toggle-btn ${mobileTab === 'cardapio' ? 'active' : ''}`}
          onClick={() => setMobileTab('cardapio')}
        >
          <Tag size={16} /> Cardápio de Produtos
        </button>
        <button
          className={`mobile-toggle-btn ${mobileTab === 'carrinho' ? 'active' : ''}`}
          onClick={() => setMobileTab('carrinho')}
        >
          <ShoppingBag size={16} /> Comanda ({totalItensQtd})
        </button>
      </div>

      {/* Coluna 1: Cardápio de Produtos */}
      <div className={`caixa-cardapio-col ${mobileTab !== 'cardapio' ? 'mobile-hidden' : ''}`}>
        <div className="view-title" style={{ margin: 0 }}>
          <ShoppingBag size={24} color="var(--primary)" />
          <span>Cardápio - Lançar Pedidos</span>
        </div>

        {sucessoMsg && (
          <div style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            <CheckCircle2 size={18} />
            <span>{sucessoMsg}</span>
          </div>
        )}

        {/* Comprovante do último pedido fechado */}
        {ultimoPedido && (
          <div className="painel-comprovante">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '180px' }}>
                <div style={{ fontWeight: 800, color: 'var(--text-title)', fontSize: '0.95rem' }}>
                  Comanda #{ultimoPedido.numero} — {ultimoPedido.cliente}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--app-ink-muted)', marginTop: '2px' }}>
                  Total R$ {(Number(ultimoPedido.total) || 0).toFixed(2)}
                </div>
              </div>

              <button
                className="btn btn-primary"
                style={{ padding: '0.55rem 0.9rem', fontSize: '0.9rem' }}
                onClick={imprimirComprovante}
                disabled={statusImpressao?.tipo === 'enviando'}
              >
                <Printer size={17} />
                {statusImpressao?.tipo === 'enviando' ? 'Enviando...' : 'Imprimir comprovante'}
              </button>

              <button
                className="btn btn-secondary"
                style={{ padding: '0.5rem', minHeight: '38px' }}
                onClick={() => { setUltimoPedido(null); setStatusImpressao(null); }}
                title="Fechar"
              >
                <X size={16} />
              </button>
            </div>

            {statusImpressao && statusImpressao.tipo !== 'enviando' && (
              <div style={{
                fontSize: '0.83rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: statusImpressao.tipo === 'ok' ? 'var(--status-pronto)' : 'var(--primary)'
              }}>
                {statusImpressao.tipo === 'ok' ? <Check size={15} /> : <AlertCircle size={15} />}
                <span>{statusImpressao.texto}</span>
              </div>
            )}
          </div>
        )}

        {/* Pílulas de Filtro por Categoria */}
        <div className="cat-pills">
          {categorias.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${categoriaAtiva === cat ? 'active' : ''}`}
              onClick={() => setCategoriaAtiva(cat)}
            >
              {cat === 'todas' ? 'Todas as Categorias' : cat}
            </button>
          ))}
        </div>

        {/* Grade de Produtos com Categoria, Descrição e Saldo de Estoque */}
        <div className="produtos-grid">
          {produtosFiltrados.map(prod => {
            const situacao = infoEstoque(prod);

            return (
              <div
                key={prod.id}
                className={`prod-card ${situacao.esgotado ? 'prod-card-esgotado' : ''}`}
                onClick={() => adicionarAoCarrinho(prod)}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.4rem' }}>
                    <span className="prod-cat">{getCatNome(prod)}</span>
                    {situacao.controla && (
                      situacao.esgotado ? (
                        <span className="estoque-badge estoque-esgotado">ESGOTADO</span>
                      ) : situacao.acabando ? (
                        <span className="estoque-badge estoque-acabando">Últimas {situacao.disponivel}</span>
                      ) : (
                        <span className="estoque-badge estoque-ok">Restam {situacao.disponivel}</span>
                      )
                    )}
                  </div>
                  <div className="prod-title">{prod.nome}</div>
                  {prod.descricao && (
                    <div className="prod-desc">{prod.descricao}</div>
                  )}
                </div>
                <div className="prod-footer">
                  <span className="prod-preco">R$ {(prod.preco || 0).toFixed(2)}</span>
                  <button
                    className="prod-add-btn"
                    title={situacao.esgotado ? 'Produto esgotado' : 'Adicionar ao Pedido'}
                    disabled={situacao.esgotado}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Coluna 2: Carrinho / Comanda Atual */}
      <div className={`caixa-carrinho-col ${mobileTab !== 'carrinho' ? 'mobile-hidden' : ''}`}>
        <div className="carrinho-header">
          <div className="carrinho-title">
            <ShoppingBag size={20} color="var(--primary)" />
            <span>Comanda Atual</span>
          </div>
          {carrinho.length > 0 && (
            <button
              className="btn btn-secondary"
              style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem', minHeight: '32px' }}
              onClick={limparCarrinho}
            >
              Limpar
            </button>
          )}
        </div>

        {/* Input Nome do Cliente */}
        <div className="form-group">
          <label className="form-label">Nome do Cliente *</label>
          <div className="cliente-input-box">
            <User size={18} color="var(--primary)" />
            <input
              type="text"
              className="cliente-input"
              placeholder="Digite o nome do cliente..."
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
            />
          </div>
        </div>

        {/* Aviso de estoque insuficiente — o carrinho fica intacto */}
        {erroEstoque && (
          <div className="aviso-estoque">
            <div className="aviso-estoque-titulo">
              <AlertCircle size={17} />
              <span>{erroEstoque.titulo}</span>
            </div>
            <ul className="aviso-estoque-lista">
              {erroEstoque.itens.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.nome}</strong>
                  {item.pedido !== undefined ? ` — pedido ${item.pedido}, ` : ' — '}
                  {item.disponivel > 0
                    ? `restam apenas ${item.disponivel}`
                    : 'sem estoque disponível'}
                </li>
              ))}
            </ul>
            <div style={{ fontSize: '0.78rem', color: 'var(--app-ink-muted)' }}>
              Ajuste as quantidades acima e envie novamente. Nada do pedido foi perdido.
            </div>
            <button
              className="btn btn-secondary"
              style={{ alignSelf: 'flex-start', padding: '0.25rem 0.6rem', fontSize: '0.78rem', minHeight: '30px' }}
              onClick={() => setErroEstoque(null)}
            >
              Entendi
            </button>
          </div>
        )}

        {/* Itens do Carrinho */}
        <div className="carrinho-itens">
          {carrinho.length === 0 ? (
            <div className="carrinho-vazio">
              <ShoppingBag size={36} opacity={0.4} />
              <p>Nenhum item adicionado ainda.</p>
              <span style={{ fontSize: '0.82rem' }}>Clique nos produtos do cardápio para montar o pedido.</span>
            </div>
          ) : (
            carrinho.map(item => {
              // O produto do menu é a fonte da verdade do saldo, não a cópia
              // que foi para o carrinho no momento do clique.
              const produtoAtual = listaProdutos.find(p => p.id === item.id) || item;
              const situacao = infoEstoque(produtoAtual);
              const noLimite = situacao.controla && situacao.disponivel <= 0;

              return (
              <div key={item.id} className="carrinho-item">
                <div className="item-main">
                  <div>
                    <div className="item-nome">{item.nome}</div>
                    <div className="item-preco">R$ {(item.preco * item.quantidade).toFixed(2)}</div>
                    {situacao.controla && (
                      <div style={{ fontSize: '0.72rem', color: noLimite ? 'var(--primary)' : 'var(--app-ink-muted)', marginTop: '2px' }}>
                        {noLimite ? 'Último disponível no estoque' : `Restam ${situacao.disponivel} em estoque`}
                      </div>
                    )}
                  </div>
                  <div className="item-qtd-ctrl">
                    <button className="qtd-btn" onClick={() => alterarQuantidade(item.id, -1)}>
                      <Minus size={14} />
                    </button>
                    <span className="qtd-val">{item.quantidade}</span>
                    <button
                      className="qtd-btn"
                      onClick={() => alterarQuantidade(item.id, 1)}
                      disabled={noLimite}
                      title={noLimite ? 'Sem estoque disponível' : 'Adicionar mais uma unidade'}
                      style={noLimite ? { opacity: 0.35, cursor: 'not-allowed' } : undefined}
                    >
                      <Plus size={14} />
                    </button>
                    <button className="qtd-btn" style={{ color: 'var(--primary)', marginLeft: '4px' }} onClick={() => removerDoCarrinho(item.id)}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
                {/* Campo de observações por item */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <FileText size={12} color="var(--app-ink-muted)" />
                  <input
                    type="text"
                    className="obs-input"
                    placeholder="Obs (ex: Sem maionese)..."
                    value={item.observacao}
                    onChange={(e) => atualizarObservacao(item.id, e.target.value)}
                  />
                </div>
              </div>
              );
            })
          )}
        </div>

        {/* Seção de Forma de Pagamento & Pagar Depois */}
        <div style={{ borderTop: '1px solid var(--app-border)', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <label className="form-label">Forma de Pagamento *</label>
          <div className="pgto-grid">
            <button
              type="button"
              className={`pgto-btn ${formaPagamento === 'pix' ? 'active' : ''}`}
              onClick={() => setFormaPagamento('pix')}
            >
              <CreditCard size={16} /> PIX
            </button>
            <button
              type="button"
              className={`pgto-btn ${formaPagamento === 'dinheiro' ? 'active' : ''}`}
              onClick={() => setFormaPagamento('dinheiro')}
            >
              <DollarSign size={16} /> Dinheiro
            </button>
            <button
              type="button"
              className={`pgto-btn ${formaPagamento === 'debito' ? 'active' : ''}`}
              onClick={() => setFormaPagamento('debito')}
            >
              <CreditCard size={16} /> Débito
            </button>
            <button
              type="button"
              className={`pgto-btn ${formaPagamento === 'credito' ? 'active' : ''}`}
              onClick={() => setFormaPagamento('credito')}
            >
              <CreditCard size={16} /> Crédito
            </button>
            <button
              type="button"
              className={`pgto-btn pagar-depois ${formaPagamento === 'pagar_depois' ? 'active pagar-depois' : ''}`}
              style={{ gridColumn: 'span 2' }}
              onClick={() => setFormaPagamento('pagar_depois')}
            >
              <Calendar size={16} /> Pagar Depois (Fiado)
            </button>
          </div>

          {/* Botão de Exibir QR Code PIX quando formaPagamento === 'pix' */}
          {formaPagamento === 'pix' && totalCalculado > 0 && (
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginTop: '0.3rem', border: '1px solid var(--primary)', color: 'var(--primary)', fontWeight: 700 }}
              onClick={() => setModalPixAberto(true)}
            >
              <QrCode size={18} /> Gerar QR Code PIX (R$ {totalCalculado.toFixed(2)})
            </button>
          )}

          {/* Campo de Telefone + Data de Cobrança se for Pagar Depois */}
          {formaPagamento === 'pagar_depois' && (
            <div style={{ background: 'rgba(230, 134, 25, 0.12)', border: '1px solid var(--status-preparo)', borderRadius: 'var(--radius-md)', padding: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.3rem' }}>
              
              {/* Telefone Obrigatório */}
              <div className="form-group">
                <label className="form-label" style={{ color: 'var(--status-preparo)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Phone size={14} /> Telefone / WhatsApp do Cliente *
                </label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="Ex: (11) 98765-4321"
                  value={telefoneCliente}
                  onChange={(e) => setTelefoneCliente(e.target.value)}
                  style={{ borderColor: 'var(--status-preparo)', background: 'var(--app-canvas)' }}
                  required
                />
              </div>

              {/* Data de Vencimento */}
              <div className="form-group">
                <label className="form-label" style={{ color: 'var(--status-preparo)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Clock size={14} /> Data de Cobrança / Vencimento *
                </label>
                <input
                  type="date"
                  className="form-input"
                  value={dataCobranca}
                  onChange={(e) => setDataCobranca(e.target.value)}
                  style={{ borderColor: 'var(--status-preparo)', background: 'var(--app-canvas)' }}
                  required
                />
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--app-ink-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <AlertCircle size={13} color="var(--status-preparo)" />
                <span>O telefone e a data são obrigatórios para controle de fiado.</span>
              </div>
            </div>
          )}
        </div>

        {/* Rodapé com Cálculo de Total e Botão Enviar */}
        <div className="carrinho-footer">
          <div className="total-row">
            <span className="total-label">Total a Pagar:</span>
            <span className="total-value">R$ {totalCalculado.toFixed(2)}</span>
          </div>
          <button
            className="btn btn-primary btn-enviar"
            onClick={handleSubmit}
            disabled={carrinho.length === 0 || !cliente.trim()}
          >
            <Send size={18} /> Enviar para Cozinha
          </button>
        </div>
      </div>

      {/* Modal Interativo de QR Code PIX com Valor Dinâmico */}
      {modalPixAberto && (
        <div className="modal-overlay">
          <div className="modal-card-pix">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-title)' }}>
                <QrCode size={22} color="var(--primary)" /> Pagamento via PIX
              </div>
              <button
                className="btn btn-secondary"
                style={{ padding: '0.2rem 0.5rem', minHeight: '30px' }}
                onClick={() => setModalPixAberto(false)}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ fontSize: '0.9rem', color: 'var(--app-ink-muted)' }}>
              Cliente: <strong style={{ color: 'var(--text-title)' }}>{cliente || 'Cliente no Caixa'}</strong>
            </div>

            {/* Imagem Dinâmica do QR Code BACEN PIX */}
            {payloadPixAtual ? (
              <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--primary)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(payloadPixAtual)}`}
                  alt="QR Code PIX Dinâmico"
                  style={{ width: '200px', height: '200px' }}
                />
              </div>
            ) : (
              <div style={{ padding: '1rem', color: 'var(--status-urgente)', fontSize: '0.85rem' }}>
                Nenhuma Chave PIX cadastrada pelo Administrador.
              </div>
            )}

            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)' }}>
              R$ {totalCalculado.toFixed(2)}
            </div>

            <div style={{ fontSize: '0.82rem', color: 'var(--app-ink-muted)' }}>
              Beneficiário: <strong>{pixConfig?.nomeBeneficiario || 'Festa do Morango'}</strong> ({pixConfig?.chavePix})
            </div>

            {/* Pix Copia e Cola */}
            {payloadPixAtual && (
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <button className="btn btn-secondary" style={{ width: '100%', fontSize: '0.85rem' }} onClick={copiarPixCopiaCola}>
                  {pixCopiado ? <Check size={16} color="var(--primary)" /> : <Copy size={16} />}
                  {pixCopiado ? 'Código PIX Copiado!' : 'Copiar Código Pix Copia e Cola'}
                </button>
              </div>
            )}

            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', marginTop: '0.5rem' }}>
              <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setModalPixAberto(false)}>
                Voltar
              </button>
              <button
                className="btn btn-primary"
                style={{ flex: 1.5 }}
                onClick={handleSubmit}
                disabled={carrinho.length === 0 || !cliente.trim()}
              >
                <Send size={16} /> Confirmar & Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Barra Flutuante de Atalho do Carrinho em Mobile */}
      <div
        className={`mobile-cart-float-bar ${mobileTab === 'cardapio' && carrinho.length > 0 ? 'mobile-show-float' : ''}`}
        onClick={() => setMobileTab('carrinho')}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <ShoppingBag size={20} />
          <span>Ver Pedido ({totalItensQtd} {totalItensQtd === 1 ? 'item' : 'itens'})</span>
        </div>
        <span>R$ {totalCalculado.toFixed(2)} →</span>
      </div>
    </div>
  );
}
