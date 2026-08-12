/*
 * layout.js — monta o comprovante do cliente e a via de cozinha.
 *
 * Os dois layouts saem daqui, e a reimpressao usa exatamente os mesmos, para
 * que a 2a via nunca divirja do original com o tempo. A unica diferenca e a
 * marca "** 2a VIA **" no cabecalho.
 */

const { EscPos } = require('./escpos');

const NOMES_PAGAMENTO = {
  pix: 'PIX',
  dinheiro: 'DINHEIRO',
  debito: 'CARTAO DE DEBITO',
  credito: 'CARTAO DE CREDITO',
  pagar_depois: 'PAGAR DEPOIS'
};

function moeda(valor) {
  return `R$ ${Number(valor || 0).toFixed(2).replace('.', ',')}`;
}

function dataHora(iso) {
  const d = iso ? new Date(iso) : new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

function dataCurta(valor) {
  if (!valor) return 'Sem data';
  // Aceita tanto "2026-08-19" quanto ISO completo
  const [ano, mes, dia] = String(valor).slice(0, 10).split('-');
  return dia && mes && ano ? `${dia}/${mes}/${ano}` : String(valor);
}

function cabecalhoComanda(doc, numero) {
  doc.alinhar('centro').negrito(true).tamanho('duplo');
  doc.textoBruto(`COMANDA ${numero}`);
  doc.tamanho('normal').negrito(false).alinhar('esquerda');
}

function marcaSegundaVia(doc) {
  doc.alinhar('centro').negrito(true);
  doc.textoBruto('** 2a VIA **');
  doc.negrito(false).alinhar('esquerda');
}

/*
 * Comprovante do cliente: cabecalho, comanda em fonte dupla, itens com
 * observacao indentada, total e bloco de pagamento.
 */
function comprovanteCliente(pedido, config = {}, opcoes = {}) {
  const doc = new EscPos(config);
  doc.init();

  doc.alinhar('centro').negrito(true);
  if (config.cabecalho) doc.textoBruto(String(config.cabecalho).slice(0, doc.largura));
  doc.negrito(false);
  if (config.subCabecalho) doc.textoBruto(String(config.subCabecalho).slice(0, doc.largura));
  doc.alinhar('esquerda');

  if (opcoes.segundaVia) marcaSegundaVia(doc);

  doc.linha();
  cabecalhoComanda(doc, pedido.numero);
  doc.linha();

  doc.texto(`Cliente: ${pedido.cliente || '-'}`);
  doc.textoBruto(dataHora(pedido.criadoEm));
  if (pedido.criadoPor) doc.texto(`Atendente: ${pedido.criadoPor}`);

  doc.linha();

  for (const item of pedido.itens || []) {
    const subtotal = (item.preco || 0) * (item.quantidade || 1);
    doc.linhaColunas(`${item.quantidade}x ${item.nome}`, moeda(subtotal));

    if (item.observacao && String(item.observacao).trim()) {
      for (const linha of doc.quebrar(`obs: ${String(item.observacao).trim()}`, doc.largura - 3)) {
        doc.textoBruto('   ' + linha);
      }
    }
  }

  doc.linha();
  doc.negrito(true);
  doc.linhaColunas('TOTAL', moeda(pedido.total));
  doc.negrito(false);

  // Bloco de pagamento. "Pagar depois" ganha destaque, porque e o unico
  // caso em que o cliente sai devendo e precisa saber quando sera cobrado.
  const forma = NOMES_PAGAMENTO[pedido.formaPagamento] || String(pedido.formaPagamento || '').toUpperCase();

  if (pedido.formaPagamento === 'pagar_depois' && pedido.statusPagamento !== 'pago') {
    doc.linha();
    doc.alinhar('centro').negrito(true);
    doc.textoBruto('*** PAGAMENTO PENDENTE ***');
    doc.negrito(false).alinhar('esquerda');
    if (pedido.telefoneCliente) doc.texto(`Tel: ${pedido.telefoneCliente}`);
    doc.texto(`Cobranca: ${dataCurta(pedido.dataCobranca)}`);
  } else {
    const quitado = pedido.statusPagamento === 'pago' ? ' - PAGO' : '';
    doc.texto(`Pagamento: ${forma}${quitado}`);
  }

  doc.linha();
  doc.alinhar('centro');
  if (config.rodape) doc.texto(String(config.rodape));
  doc.textoBruto('Obrigado!');
  doc.alinhar('esquerda');

  doc.feed(3);
  if (config.cortarPapel !== false) doc.cortar();

  return doc.build();
}

/*
 * Via de cozinha: sem precos, comanda gigante e itens em fonte grande, para
 * ser lida de longe em cima da bancada.
 */
function viaCozinha(pedido, config = {}, opcoes = {}) {
  const doc = new EscPos(config);
  doc.init();

  doc.alinhar('centro').negrito(true);
  doc.textoBruto('COZINHA');
  doc.negrito(false).alinhar('esquerda');

  if (opcoes.segundaVia) marcaSegundaVia(doc);

  doc.linha('=');
  doc.alinhar('centro').negrito(true).tamanho('duplo');
  doc.textoBruto(String(pedido.numero));
  doc.tamanho('normal').negrito(false).alinhar('esquerda');
  doc.linha('=');

  doc.texto(`Cliente: ${pedido.cliente || '-'}`);
  doc.textoBruto(dataHora(pedido.criadoEm));
  doc.linha();

  // Metade das colunas, porque a fonte dupla ocupa o dobro de largura
  const larguraDupla = Math.floor(doc.largura / 2);

  for (const item of pedido.itens || []) {
    doc.tamanho('duplo').negrito(true);
    for (const linha of doc.quebrar(`${item.quantidade}x ${item.nome}`, larguraDupla)) {
      doc.textoBruto(linha);
    }
    doc.tamanho('normal').negrito(false);

    if (item.observacao && String(item.observacao).trim()) {
      doc.negrito(true);
      for (const linha of doc.quebrar(`>> ${String(item.observacao).trim()}`, doc.largura)) {
        doc.textoBruto(linha);
      }
      doc.negrito(false);
    }

    doc.feed(1);
  }

  doc.linha();
  doc.feed(3);
  if (config.cortarPapel !== false) doc.cortar();

  return doc.build();
}

module.exports = {
  comprovanteCliente,
  viaCozinha,
  moeda,
  dataHora
};
