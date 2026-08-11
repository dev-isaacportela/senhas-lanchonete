import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, Trash2, User, Send, CheckCircle2, FileText, Utensils, Beef, Sparkles, CupSoda, Cookie, Pizza, Coffee, CreditCard, DollarSign, Calendar, Clock, AlertCircle, Phone } from 'lucide-react';

function getCategoriaIcon(icone) {
  switch (icone) {
    case 'burger': return <Beef size={16} />;
    case 'fries': return <Sparkles size={16} />;
    case 'drink': return <CupSoda size={16} />;
    case 'dessert': return <Cookie size={16} />;
    case 'pizza': return <Pizza size={16} />;
    case 'coffee': return <Coffee size={16} />;
    default: return <Utensils size={16} />;
  }
}

export default function CaixaView({ menu, operador, onEnviarPedido }) {
  const [cliente, setCliente] = useState('');
  const [telefoneCliente, setTelefoneCliente] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('todas');
  const [carrinho, setCarrinho] = useState([]);
  const [sucessoMsg, setSucessoMsg] = useState(null);
  const [mobileTab, setMobileTab] = useState('cardapio'); // 'cardapio' | 'carrinho'

  // Forma de Pagamento & Pagar Depois
  const [formaPagamento, setFormaPagamento] = useState('pix'); // pix | dinheiro | debito | credito | pagar_depois
  const [dataCobranca, setDataCobranca] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split('T')[0];
  });

  const categorias = menu?.categorias || [];
  const produtos = menu?.produtos || [];

  const produtosFiltrados = categoriaAtiva === 'todas'
    ? produtos
    : produtos.filter(p => p.categoriaId === categoriaAtiva);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho(prev => {
      const idx = prev.findIndex(item => item.id === produto.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx].quantidade += 1;
        return copy;
      }
      return [...prev, {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: 1,
        observacao: ''
      }];
    });
  };

  const alterarQuantidade = (id, delta) => {
    setCarrinho(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const novaQtd = item.quantidade + delta;
          return novaQtd > 0 ? { ...item, quantidade: novaQtd } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const atualizarObservacao = (id, obs) => {
    setCarrinho(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, observacao: obs };
      }
      return item;
    }));
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(prev => prev.filter(item => item.id !== id));
  };

  const totalCalculado = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  const totalItensQtd = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cliente.trim()) {
      alert('Por favor, informe o nome do cliente!');
      return;
    }
    if (carrinho.length === 0) {
      alert('Selecione pelo menos um item para o pedido.');
      return;
    }

    const isPagarDepois = formaPagamento === 'pagar_depois';

    if (isPagarDepois) {
      if (!telefoneCliente.trim()) {
        alert('Por favor, informe o telefone do cliente para a opção Pagar Depois!');
        return;
      }
      if (!dataCobranca) {
        alert('Por favor, selecione a data de cobrança!');
        return;
      }
    }

    onEnviarPedido({
      cliente: cliente.trim(),
      telefoneCliente: isPagarDepois ? telefoneCliente.trim() : null,
      itens: carrinho,
      formaPagamento,
      statusPagamento: isPagarDepois ? 'pendente_pagamento' : 'pago',
      dataCobranca: isPagarDepois ? dataCobranca : null
    }, (res) => {
      if (res && res.status === 'success') {
        setSucessoMsg(`Pedido #${res.order.numero} enviado com sucesso!`);
        setCliente('');
        setTelefoneCliente('');
        setCarrinho([]);
        setFormaPagamento('pix');
        setMobileTab('cardapio');
        setTimeout(() => setSucessoMsg(null), 4000);
      }
    });
  };

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
          padding: 0.9rem 1.25rem;
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 24px var(--primary-glow);
          align-items: center;
          justify-content: space-between;
          font-weight: 700;
          z-index: 90;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.2);
          -webkit-tap-highlight-color: transparent;
        }

        @media (max-width: 1024px) {
          .caixa-container {
            display: flex !important;
            flex-direction: column !important;
            height: auto !important;
            min-height: auto !important;
          }

          .caixa-cardapio {
            display: ${mobileTab === 'cardapio' ? 'flex' : 'none'} !important;
            overflow-y: visible !important;
            height: auto !important;
            max-height: none !important;
            padding-right: 0 !important;
          }

          .caixa-carrinho {
            display: ${mobileTab === 'carrinho' ? 'flex' : 'none'} !important;
            overflow-y: visible !important;
            height: auto !important;
            max-height: none !important;
            padding-bottom: 6rem !important;
            margin-bottom: 2rem !important;
          }

          .mobile-view-toggle {
            display: grid;
          }

          .mobile-cart-float-bar {
            display: ${mobileTab === 'cardapio' && totalItensQtd > 0 ? 'flex' : 'none'};
          }
        }

        .caixa-cardapio {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .cat-bar {
          display: flex;
          gap: 0.4rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          -webkit-overflow-scrolling: touch;
        }

        .cat-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 0.9rem;
          border-radius: var(--radius-md);
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          color: var(--app-ink);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          white-space: nowrap;
          transition: all 130ms ease;
          min-height: 44px;
        }

        .cat-btn.active {
          background: var(--primary);
          color: var(--on-primary);
          border-color: var(--primary);
          box-shadow: 0 2px 8px var(--primary-glow);
        }

        .produtos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
          gap: 0.85rem;
        }

        @media (min-width: 640px) {
          .produtos-grid {
            grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
            gap: 1rem;
          }
        }

        .prod-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 130ms ease;
          cursor: pointer;
          min-height: 145px;
          -webkit-tap-highlight-color: transparent;
        }

        .prod-card:active {
          transform: scale(0.98);
        }

        .prod-card:hover {
          border-color: var(--app-border-light);
          background: var(--app-surface-2);
          box-shadow: var(--shadow-sm);
        }

        .prod-card.indisponivel {
          opacity: 0.4;
          pointer-events: none;
        }

        .prod-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-title);
          margin-bottom: 0.25rem;
          line-height: 1.25;
        }

        .prod-desc {
          font-size: 0.8rem;
          color: var(--app-ink-muted);
          margin-bottom: 0.75rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .prod-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .prod-preco {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--status-pronto);
        }

        .prod-add-btn {
          background: rgba(16, 185, 129, 0.12);
          color: var(--primary);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-md);
          padding: 0.45rem 0.7rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.82rem;
          min-height: 38px;
        }

        .prod-card:hover .prod-add-btn {
          background: var(--primary);
          color: var(--on-primary);
        }

        /* Resumo do Pedido / Carrinho */
        .caixa-carrinho {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: var(--shadow-md);
        }

        .carrinho-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-title);
          border-bottom: 1px solid var(--app-border);
          padding-bottom: 0.75rem;
        }

        .cliente-input-box {
          background: var(--app-canvas);
          border: 2px solid var(--primary);
          border-radius: var(--radius-md);
          padding: 0.65rem 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          box-shadow: none;
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

        .cliente-input::placeholder {
          color: var(--app-ink-muted);
          font-weight: 400;
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

        .carrinho-vazio {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--app-ink-muted);
          text-align: center;
          gap: 0.5rem;
          padding: 2rem 0;
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

        .qtd-btn:hover {
          color: var(--primary);
          background: var(--app-surface-2);
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
          padding: 0.45rem 0.6rem;
          color: var(--text-obs);
          font-size: 0.85rem;
          outline: none;
          width: 100%;
        }

        .obs-input:focus {
          border-color: var(--primary);
        }

        /* Seletor de Pagamento */
        .pgto-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.4rem;
        }

        .pgto-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          padding: 0.5rem 0.3rem;
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          color: var(--app-ink);
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 130ms ease;
          min-height: 48px;
        }

        .pgto-btn.active {
          border-color: var(--primary);
          background: rgba(16, 185, 129, 0.15);
          color: var(--primary);
        }

        .pgto-btn.active.pagar-depois {
          border-color: var(--status-preparo);
          background: rgba(230, 134, 25, 0.18);
          color: var(--status-preparo);
        }

        .carrinho-footer {
          border-top: 1px solid var(--app-border);
          padding-top: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .total-label {
          font-size: 0.95rem;
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
          min-height: 50px;
        }

        .toast-sucesso {
          background: rgba(45, 157, 120, 0.18);
          border: 1px solid var(--status-pronto);
          color: #4ADE80;
          padding: 0.75rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 0.9rem;
        }
      `}</style>

      {/* Alternador de Tela para Mobile */}
      <div className="mobile-view-toggle">
        <button
          className={`mobile-toggle-btn ${mobileTab === 'cardapio' ? 'active' : ''}`}
          onClick={() => setMobileTab('cardapio')}
        >
          <Utensils size={16} /> Cardápio
        </button>
        <button
          className={`mobile-toggle-btn ${mobileTab === 'carrinho' ? 'active' : ''}`}
          onClick={() => setMobileTab('carrinho')}
        >
          <ShoppingBag size={16} /> Carrinho ({totalItensQtd})
        </button>
      </div>

      {/* Esquerda: Seletor de Cardápio */}
      <div className="caixa-cardapio">
        {/* Categorias */}
        <div className="cat-bar">
          <button
            className={`cat-btn ${categoriaAtiva === 'todas' ? 'active' : ''}`}
            onClick={() => setCategoriaAtiva('todas')}
          >
            <Utensils size={16} /> Todos
          </button>
          {categorias.map(cat => (
            <button
              key={cat.id}
              className={`cat-btn ${categoriaAtiva === cat.id ? 'active' : ''}`}
              onClick={() => setCategoriaAtiva(cat.id)}
            >
              {getCategoriaIcon(cat.icone)} <span>{cat.nome}</span>
            </button>
          ))}
        </div>

        {/* Grade de Produtos */}
        <div className="produtos-grid">
          {produtosFiltrados.map(prod => (
            <div
              key={prod.id}
              className={`prod-card ${!prod.disponivel ? 'indisponivel' : ''}`}
              onClick={() => prod.disponivel && adicionarAoCarrinho(prod)}
            >
              <div>
                <div className="prod-title">{prod.nome}</div>
                <div className="prod-desc">{prod.descricao}</div>
              </div>
              <div className="prod-footer">
                <div className="prod-preco">R$ {prod.preco.toFixed(2)}</div>
                <button className="prod-add-btn">
                  <Plus size={14} /> Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direita: Painel de Lançamento / Carrinho com Pagamento */}
      <div className="caixa-carrinho">
        <div className="carrinho-header">
          <ShoppingBag size={20} color="var(--primary)" />
          <span>Resumo do Pedido</span>
        </div>

        {sucessoMsg && (
          <div className="toast-sucesso">
            <CheckCircle2 size={18} />
            <span>{sucessoMsg}</span>
          </div>
        )}

        {/* Nome do Cliente com destaque visual */}
        <div className="form-group">
          <label className="form-label">Nome do Cliente *</label>
          <div className="cliente-input-box">
            <User size={20} color="var(--primary)" />
            <input
              type="text"
              className="cliente-input"
              placeholder="Digite o nome do cliente..."
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
            />
          </div>
        </div>

        {/* Lista de Itens do Pedido */}
        <div className="carrinho-itens">
          {carrinho.length === 0 ? (
            <div className="carrinho-vazio">
              <ShoppingBag size={36} strokeWidth={1.5} />
              <p>Nenhum item selecionado</p>
              <span style={{ fontSize: '0.8rem' }}>Clique nos produtos do cardápio para montar o pedido.</span>
            </div>
          ) : (
            carrinho.map(item => (
              <div key={item.id} className="carrinho-item">
                <div className="item-main">
                  <div>
                    <div className="item-nome">{item.nome}</div>
                    <div className="item-preco">R$ {(item.preco * item.quantidade).toFixed(2)}</div>
                  </div>
                  <div className="item-qtd-ctrl">
                    <button className="qtd-btn" onClick={() => alterarQuantidade(item.id, -1)}>
                      <Minus size={14} />
                    </button>
                    <span className="qtd-val">{item.quantidade}</span>
                    <button className="qtd-btn" onClick={() => alterarQuantidade(item.id, 1)}>
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
            ))
          )}
        </div>

        {/* Seção de Forma de Pagamento & Pagar Depois (com Telefone Obrigatório) */}
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

      {/* Barra Flutuante de Atalho do Carrinho em Mobile */}
      <div className="mobile-cart-float-bar" onClick={() => setMobileTab('carrinho')}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <ShoppingBag size={20} />
          <span>Ver Pedido ({totalItensQtd} {totalItensQtd === 1 ? 'item' : 'itens'})</span>
        </div>
        <span>R$ {totalCalculado.toFixed(2)} →</span>
      </div>
    </div>
  );
}
