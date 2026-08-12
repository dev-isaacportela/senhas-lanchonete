/*
 * services/estoque.js — reservas de carrinho e baixa de estoque.
 *
 * Modelo: o caixa reserva ao colocar no carrinho (memoria, com TTL) e a baixa
 * definitiva acontece na confirmacao do pedido (disco, em menu.json).
 *
 * As reservas vivem apenas em memoria de proposito: reiniciar o servidor
 * limpa carrinhos abandonados, que e o comportamento correto para um dado
 * transitorio. O estoque em si e persistido.
 */

const store = require('../store');

const TTL_MS = 10 * 60 * 1000;      // 10 minutos, renovados a cada interacao
const INTERVALO_VARREDURA_MS = 30 * 1000;

// produtoId -> Map(socketId -> { quantidade, expiraEm })
const reservas = new Map();

function agora() {
  return Date.now();
}

function acharProduto(produtoId) {
  return store.menu.produtos.find(p => p.id === produtoId);
}

function controlaEstoque(produto) {
  return !!(produto && produto.controlaEstoque);
}

function estoqueDe(produto) {
  return Math.max(0, parseInt(produto && produto.estoque, 10) || 0);
}

function reservasDoProduto(produtoId) {
  return reservas.get(produtoId) || null;
}

// Soma das reservas ativas, opcionalmente ignorando um socket.
function somarReservas(produtoId, ignorarSocketId = null) {
  const mapa = reservasDoProduto(produtoId);
  if (!mapa) return 0;

  const t = agora();
  let soma = 0;
  for (const [socketId, reserva] of mapa) {
    if (socketId === ignorarSocketId) continue;
    if (reserva.expiraEm <= t) continue;
    soma += reserva.quantidade;
  }
  return soma;
}

function reservadoTotal(produtoId) {
  return somarReservas(produtoId);
}

function reservaDoSocket(produtoId, socketId) {
  const mapa = reservasDoProduto(produtoId);
  if (!mapa || !socketId) return 0;
  const reserva = mapa.get(socketId);
  if (!reserva || reserva.expiraEm <= agora()) return 0;
  return reserva.quantidade;
}

/*
 * Quanto este socket ainda pode reservar: o estoque menos o que os OUTROS
 * ja seguraram. Produto sem controle de estoque e ilimitado.
 */
function disponivelPara(produtoId, socketId) {
  const produto = acharProduto(produtoId);
  if (!controlaEstoque(produto)) return Infinity;
  return Math.max(0, estoqueDe(produto) - somarReservas(produtoId, socketId));
}

// Quanto aparece como "Restam N" na tela: desconta todas as reservas.
function disponivelPublico(produtoId) {
  const produto = acharProduto(produtoId);
  if (!controlaEstoque(produto)) return Infinity;
  return Math.max(0, estoqueDe(produto) - reservadoTotal(produtoId));
}

/*
 * Reserva `quantidade` unidades a mais para este socket (delta, nao absoluto).
 * Renova o TTL. Retorna { ok, reservado, disponivel } — em falha, `disponivel`
 * diz quanto ainda cabia.
 */
function reservar(produtoId, socketId, quantidade = 1) {
  const qtd = parseInt(quantidade, 10) || 0;
  const produto = acharProduto(produtoId);

  if (!produto) {
    return { ok: false, erro: 'produto_nao_encontrado', disponivel: 0 };
  }
  if (!controlaEstoque(produto)) {
    return { ok: true, ilimitado: true, reservado: 0, disponivel: Infinity };
  }
  if (qtd <= 0) {
    return { ok: false, erro: 'quantidade_invalida', disponivel: disponivelPara(produtoId, socketId) };
  }

  const jaReservado = reservaDoSocket(produtoId, socketId);
  const limite = disponivelPara(produtoId, socketId);

  if (jaReservado + qtd > limite) {
    return {
      ok: false,
      erro: 'estoque_insuficiente',
      reservado: jaReservado,
      disponivel: Math.max(0, limite - jaReservado)
    };
  }

  if (!reservas.has(produtoId)) reservas.set(produtoId, new Map());
  reservas.get(produtoId).set(socketId, {
    quantidade: jaReservado + qtd,
    expiraEm: agora() + TTL_MS
  });

  emitirAtualizacao([produtoId]);

  return {
    ok: true,
    reservado: jaReservado + qtd,
    disponivel: disponivelPublico(produtoId)
  };
}

// Libera parte da reserva deste socket. Sem quantidade, libera tudo do produto.
function liberar(produtoId, socketId, quantidade = null) {
  const mapa = reservasDoProduto(produtoId);
  if (!mapa || !mapa.has(socketId)) return { ok: true, reservado: 0 };

  const atual = mapa.get(socketId).quantidade;
  const qtd = quantidade === null ? atual : (parseInt(quantidade, 10) || 0);
  const restante = Math.max(0, atual - qtd);

  if (restante === 0) {
    mapa.delete(socketId);
    if (mapa.size === 0) reservas.delete(produtoId);
  } else {
    mapa.set(socketId, { quantidade: restante, expiraEm: agora() + TTL_MS });
  }

  emitirAtualizacao([produtoId]);

  return { ok: true, reservado: restante, disponivel: disponivelPublico(produtoId) };
}

// Usado no disconnect e no "limpar carrinho".
function liberarTudo(socketId) {
  const afetados = [];

  for (const [produtoId, mapa] of reservas) {
    if (mapa.delete(socketId)) {
      afetados.push(produtoId);
      if (mapa.size === 0) reservas.delete(produtoId);
    }
  }

  if (afetados.length) emitirAtualizacao(afetados);
  return afetados;
}

/*
 * Baixa definitiva. Tudo-ou-nada: valida a lista inteira antes de decrementar
 * qualquer item. Como nao ha await no meio, e atomico na pratica.
 *
 * Retorna { ok: true, itensBaixados } ou { ok: false, itensIndisponiveis }.
 */
function confirmar(itens = [], socketId = null) {
  const problemas = [];
  const aBaixar = [];

  for (const item of itens) {
    const produto = acharProduto(item.id);
    if (!controlaEstoque(produto)) continue;

    const qtd = parseInt(item.quantidade, 10) || 0;
    const limite = disponivelPara(item.id, socketId);

    if (qtd > limite) {
      problemas.push({
        produtoId: item.id,
        nome: produto.nome,
        pedido: qtd,
        disponivel: limite
      });
    } else {
      aBaixar.push({ produto, quantidade: qtd, produtoId: item.id });
    }
  }

  if (problemas.length) {
    return { ok: false, erro: 'estoque_insuficiente', itensIndisponiveis: problemas };
  }

  const idsBaixados = [];
  for (const baixa of aBaixar) {
    baixa.produto.estoque = Math.max(0, estoqueDe(baixa.produto) - baixa.quantidade);
    idsBaixados.push(baixa.produtoId);

    // A reserva virou venda: some do mapa em vez de esperar o TTL.
    if (socketId) liberarSilencioso(baixa.produtoId, socketId, baixa.quantidade);
  }

  if (idsBaixados.length) {
    store.salvarMenu();
    emitirAtualizacao(idsBaixados);
  }

  return { ok: true, itensBaixados: idsBaixados };
}

// Igual ao liberar, mas sem broadcast — quem chama ja vai emitir.
function liberarSilencioso(produtoId, socketId, quantidade) {
  const mapa = reservasDoProduto(produtoId);
  if (!mapa || !mapa.has(socketId)) return;

  const restante = Math.max(0, mapa.get(socketId).quantidade - quantidade);
  if (restante === 0) {
    mapa.delete(socketId);
    if (mapa.size === 0) reservas.delete(produtoId);
  } else {
    mapa.set(socketId, { quantidade: restante, expiraEm: agora() + TTL_MS });
  }
}

/*
 * Devolucao no cancelamento. So devolve itens marcados com estoqueBaixado,
 * que e o que impede devolucao dupla ao cancelar duas vezes.
 */
function devolver(itens = []) {
  const idsDevolvidos = [];

  for (const item of itens) {
    if (!item.estoqueBaixado) continue;

    const produto = acharProduto(item.id);
    if (!controlaEstoque(produto)) continue;

    produto.estoque = estoqueDe(produto) + (parseInt(item.quantidade, 10) || 0);
    idsDevolvidos.push(item.id);
  }

  if (idsDevolvidos.length) {
    store.salvarMenu();
    emitirAtualizacao(idsDevolvidos);
  }

  return idsDevolvidos;
}

// Remove reservas com TTL vencido.
function varrerExpiradas() {
  const t = agora();
  const afetados = [];

  for (const [produtoId, mapa] of reservas) {
    for (const [socketId, reserva] of mapa) {
      if (reserva.expiraEm <= t) {
        mapa.delete(socketId);
        if (!afetados.includes(produtoId)) afetados.push(produtoId);
      }
    }
    if (mapa.size === 0) reservas.delete(produtoId);
  }

  if (afetados.length) emitirAtualizacao(afetados);
  return afetados;
}

// Snapshot para o socket e para GET /api/estoque.
function snapshot(produtoIds = null) {
  const alvo = produtoIds
    ? store.menu.produtos.filter(p => produtoIds.includes(p.id))
    : store.menu.produtos;

  return alvo.map(p => {
    const reservado = reservadoTotal(p.id);
    return {
      produtoId: p.id,
      nome: p.nome,
      controlaEstoque: !!p.controlaEstoque,
      estoque: estoqueDe(p),
      estoqueMinimo: parseInt(p.estoqueMinimo, 10) || 0,
      reservado,
      disponivel: p.controlaEstoque ? Math.max(0, estoqueDe(p) - reservado) : null
    };
  });
}

function emitirAtualizacao(produtoIds) {
  store.emitir('estoque_atualizado', snapshot(produtoIds));
}

/*
 * Ajuste manual de estoque. Aceita { valor } (definir) ou { delta } (repor).
 * Nunca deixa o saldo negativo.
 */
function ajustar(produtoId, { valor, delta } = {}) {
  const produto = acharProduto(produtoId);
  if (!produto) return { ok: false, erro: 'produto_nao_encontrado' };

  const anterior = estoqueDe(produto);
  let novo = anterior;

  if (valor !== undefined && valor !== null) {
    novo = Math.max(0, parseInt(valor, 10) || 0);
  } else if (delta !== undefined && delta !== null) {
    novo = Math.max(0, anterior + (parseInt(delta, 10) || 0));
  } else {
    return { ok: false, erro: 'ajuste_invalido' };
  }

  produto.estoque = novo;
  store.salvarMenu();
  emitirAtualizacao([produtoId]);

  return { ok: true, produto, anterior, novo };
}

let timerVarredura = null;

function iniciarVarredura() {
  if (timerVarredura) return;
  timerVarredura = setInterval(varrerExpiradas, INTERVALO_VARREDURA_MS);
  if (typeof timerVarredura.unref === 'function') timerVarredura.unref();
}

function pararVarredura() {
  if (!timerVarredura) return;
  clearInterval(timerVarredura);
  timerVarredura = null;
}

module.exports = {
  TTL_MS,
  INTERVALO_VARREDURA_MS,
  reservas,
  disponivelPara,
  disponivelPublico,
  reservadoTotal,
  reservaDoSocket,
  reservar,
  liberar,
  liberarTudo,
  confirmar,
  devolver,
  varrerExpiradas,
  snapshot,
  emitirAtualizacao,
  ajustar,
  iniciarVarredura,
  pararVarredura
};
