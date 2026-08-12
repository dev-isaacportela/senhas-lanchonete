/*
 * services/orders.js — criacao e mudanca de status de pedido.
 *
 * A logica estava duplicada entre os handlers REST e os handlers socket,
 * o que garantiria divergencia assim que estoque e impressao entrassem em
 * cena. Os 4 handlers agora sao cascas finas em volta destas duas funcoes.
 *
 * Contrato de retorno:
 *   sucesso -> { ok: true, order }
 *   falha   -> { ok: false, erro: <codigo>, mensagem: <texto>, status: <http> }
 */

const store = require('../store');
const estoque = require('./estoque');

const STATUS_VALIDOS = ['pendente', 'em_preparo', 'pronto', 'entregue', 'entrega_parcial', 'cancelado'];

function getNextOrderNumber() {
  if (store.orders.length === 0) return 101;
  const maxNum = Math.max(...store.orders.map(o => o.numero || 100));
  return maxNum + 1;
}

function falha(erro, mensagem, status = 400, extras = {}) {
  return { ok: false, erro, mensagem, status, ...extras };
}

/*
 * Cria um pedido. Valida cliente, itens e a regra de telefone obrigatorio
 * para "pagar depois" — a validacao mais completa das duas versoes antigas.
 */
function criarPedido(payload = {}) {
  const {
    cliente,
    telefoneCliente,
    criadoPor,
    itens,
    formaPagamento,
    statusPagamento,
    dataCobranca,
    socketId
  } = payload;

  if (!cliente || !String(cliente).trim()) {
    return falha('cliente_obrigatorio', 'O nome do cliente é obrigatório.');
  }
  if (!itens || !Array.isArray(itens) || itens.length === 0) {
    return falha('itens_obrigatorios', 'O pedido deve conter ao menos 1 item.');
  }

  const formaPgto = formaPagamento || 'pix';
  const isPagarDepois = formaPgto === 'pagar_depois';

  if (isPagarDepois && (!telefoneCliente || !String(telefoneCliente).trim())) {
    return falha('telefone_obrigatorio', 'O telefone do cliente é obrigatório para a opção Pagar Depois.');
  }

  // Baixa de estoque antes de persistir: tudo-ou-nada. Se faltar qualquer
  // item, o pedido nao chega a ser criado e o caixa recebe a lista do que
  // precisa remover do carrinho.
  const baixa = estoque.confirmar(itens, socketId || null);
  if (!baixa.ok) {
    return falha(
      'estoque_insuficiente',
      'Alguns itens não têm estoque suficiente.',
      409,
      { itensIndisponiveis: baixa.itensIndisponiveis }
    );
  }

  // Marca quais itens realmente baixaram estoque. E essa flag que impede
  // devolucao dupla quando o pedido e cancelado mais de uma vez.
  const itensDoPedido = itens.map(item =>
    baixa.itensBaixados.includes(item.id) ? { ...item, estoqueBaixado: true } : item
  );

  const numero = getNextOrderNumber();
  const total = itensDoPedido.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  const operadorNome = criadoPor ? String(criadoPor).trim() : 'Caixa';
  const stPagamento = statusPagamento || (isPagarDepois ? 'pendente_pagamento' : 'pago');

  const newOrder = {
    id: `ORD-${numero}`,
    numero,
    cliente: String(cliente).trim(),
    telefoneCliente: telefoneCliente ? String(telefoneCliente).trim() : null,
    criadoPor: operadorNome,
    preparadoPor: null,
    formaPagamento: formaPgto,
    statusPagamento: stPagamento,
    dataCobranca: isPagarDepois ? (dataCobranca || null) : null,
    itens: itensDoPedido,
    total,
    status: 'pendente',
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString()
  };

  store.orders.unshift(newOrder);
  store.salvarPedidos();

  const itensResumo = itensDoPedido.map(i => `${i.quantidade}x ${i.nome} (R$ ${(i.preco * i.quantidade).toFixed(2)})`).join(', ');
  const cobrancaText = isPagarDepois
    ? ` | PAGAR DEPOIS (Tel: ${String(telefoneCliente).trim()} | Cobrança: ${dataCobranca || 'Sem data'})`
    : ` | Forma: ${formaPgto.toUpperCase()}`;

  store.registrarLog(
    newOrder.id,
    newOrder.numero,
    newOrder.cliente,
    operadorNome,
    'criacao',
    `Abriu o Pedido #${numero} para ${newOrder.cliente} | Itens: ${itensResumo}${cobrancaText} | Total: R$ ${total.toFixed(2)}`,
    itensDoPedido
  );

  if (baixa.itensBaixados.length) {
    const resumoBaixa = itensDoPedido
      .filter(i => i.estoqueBaixado)
      .map(i => `${i.nome} (-${i.quantidade})`)
      .join(', ');

    store.registrarLog(
      newOrder.id,
      newOrder.numero,
      newOrder.cliente,
      operadorNome,
      'estoque_baixa',
      `Baixa de estoque pelo Pedido #${numero}: ${resumoBaixa}`
    );
  }

  store.emitir('novo_pedido_criado', newOrder);

  return { ok: true, order: newOrder };
}

/*
 * Altera o status de um pedido. Marca todos os itens como entregues quando
 * o pedido inteiro vai para "entregue" (comportamento que so existia no
 * caminho socket) e valida o status contra a lista (que so existia no REST).
 */
function alterarStatusPedido(id, status, operador) {
  const orderIndex = store.orders.findIndex(o => o.id === id);
  if (orderIndex === -1) {
    return falha('pedido_nao_encontrado', 'Pedido não encontrado.', 404);
  }

  if (!STATUS_VALIDOS.includes(status)) {
    return falha('status_invalido', 'Status inválido.');
  }

  const order = store.orders[orderIndex];
  const operadorNome = operador ? String(operador).trim() : 'Cozinha';

  order.status = status;
  if (operador) {
    order.preparadoPor = operadorNome;
  }

  if (status === 'entregue' && Array.isArray(order.itens)) {
    order.itens = order.itens.map(i => ({ ...i, entregue: true }));
  }

  // Cancelamento devolve o estoque baixado. A flag estoqueBaixado e limpa
  // logo em seguida, entao cancelar duas vezes nao devolve em dobro.
  let itensDevolvidos = [];
  if (status === 'cancelado' && Array.isArray(order.itens)) {
    itensDevolvidos = order.itens.filter(i => i.estoqueBaixado);
    if (itensDevolvidos.length) {
      estoque.devolver(itensDevolvidos);
      order.itens = order.itens.map(i =>
        i.estoqueBaixado ? { ...i, estoqueBaixado: false } : i
      );
    }
  }

  order.atualizadoEm = new Date().toISOString();
  store.salvarPedidos();

  let acaoLog = 'status';
  let descLog = `Atualizou status do Pedido #${order.numero} para ${status}`;

  if (status === 'em_preparo') {
    acaoLog = 'preparo';
    descLog = `Iniciou o preparo do Pedido #${order.numero} (${order.cliente})`;
  } else if (status === 'pronto') {
    acaoLog = 'pronto';
    descLog = `Marcou o Pedido #${order.numero} (${order.cliente}) como PRONTO e chamou no balcão`;
  } else if (status === 'entregue') {
    acaoLog = 'entregue';
    descLog = `Finalizou e entregou o Pedido #${order.numero} para ${order.cliente}`;
  } else if (status === 'cancelado') {
    acaoLog = 'cancelamento';
    descLog = `Cancelou o Pedido #${order.numero} (${order.cliente})`;
  }

  store.registrarLog(
    order.id,
    order.numero,
    order.cliente,
    operadorNome,
    acaoLog,
    descLog,
    order.itens
  );

  if (itensDevolvidos.length) {
    const resumo = itensDevolvidos.map(i => `${i.nome} (+${i.quantidade})`).join(', ');
    store.registrarLog(
      order.id,
      order.numero,
      order.cliente,
      operadorNome,
      'estoque_devolucao',
      `Devolucao de estoque pelo cancelamento do Pedido #${order.numero}: ${resumo}`
    );
  }

  store.emitir('status_pedido_atualizado', order);

  if (status === 'pronto') {
    store.emitir('pedido_chamado', order);
  }

  return { ok: true, order };
}

module.exports = {
  STATUS_VALIDOS,
  getNextOrderNumber,
  criarPedido,
  alterarStatusPedido
};
