/*
 * printer/index.js — API publica do modulo de impressao.
 *
 * O resto do sistema fala so com este arquivo: imprimirPedido, teste,
 * carregarConfig, salvarConfig e listarImpressoras.
 */

const fs = require('fs');

const store = require('../../store');
const escpos = require('./escpos');
const layout = require('./layout');
const driver = require('./driver-windows');
const fila = require('./fila');

/*
 * Defaults da Etapa 2. Como o spike fisico ainda nao rodou (nao havia
 * impressora termica instalada), estes valores sao o palpite seguro para
 * bobina de 58mm. Tudo e ajustavel pela tela Impressora: rode a pagina de
 * teste, conte as colunas da regua e corrija aqui pela interface.
 */
const CONFIG_PADRAO = {
  habilitado: false,
  nomeImpressora: '',
  larguraColunas: 32,
  codePage: 'cp850',
  semAcentos: false,
  cortarPapel: true,
  vias: { cliente: true, cozinha: false },
  copiasCliente: 1,
  cabecalho: 'FESTA DO MORANGO',
  subCabecalho: 'Desbravadores Apocalipse',
  rodape: 'Aguarde ser chamado no balcao'
};

function carregarConfig() {
  const salvo = store.readJSON(store.PRINTER_CONFIG_FILE, {});
  return {
    ...CONFIG_PADRAO,
    ...salvo,
    vias: { ...CONFIG_PADRAO.vias, ...(salvo.vias || {}) }
  };
}

function salvarConfig(parcial = {}) {
  const atual = carregarConfig();

  const nova = {
    ...atual,
    ...parcial,
    larguraColunas: parseInt(parcial.larguraColunas ?? atual.larguraColunas, 10) || 32,
    codePage: escpos.normalizarCodePage(parcial.codePage ?? atual.codePage),
    copiasCliente: Math.max(1, parseInt(parcial.copiasCliente ?? atual.copiasCliente, 10) || 1),
    habilitado: parcial.habilitado !== undefined ? !!parcial.habilitado : atual.habilitado,
    cortarPapel: parcial.cortarPapel !== undefined ? !!parcial.cortarPapel : atual.cortarPapel,
    semAcentos: parcial.semAcentos !== undefined ? !!parcial.semAcentos : atual.semAcentos,
    vias: {
      cliente: parcial.vias?.cliente !== undefined ? !!parcial.vias.cliente : atual.vias.cliente,
      cozinha: parcial.vias?.cozinha !== undefined ? !!parcial.vias.cozinha : atual.vias.cozinha
    }
  };

  store.writeJSON(store.PRINTER_CONFIG_FILE, nova);
  return nova;
}

// Cria o arquivo de configuração no primeiro uso
if (!fs.existsSync(store.PRINTER_CONFIG_FILE)) {
  store.writeJSON(store.PRINTER_CONFIG_FILE, CONFIG_PADRAO);
}

/*
 * Enfileira as vias de um pedido. Nao bloqueia, nao lanca: se a impressao
 * estiver desligada ou sem impressora, simplesmente nao enfileira nada.
 *
 * opcoes.vias sobrescreve a configuracao (usado na reimpressao manual).
 * opcoes.ignorarHabilitado permite reimprimir com o automatico desligado.
 */
function imprimirPedido(pedido, opcoes = {}) {
  const config = carregarConfig();

  if (!config.habilitado && !opcoes.ignorarHabilitado) {
    return { enfileirado: false, motivo: 'impressao_desabilitada' };
  }
  if (!config.nomeImpressora) {
    return { enfileirado: false, motivo: 'sem_impressora' };
  }

  const vias = { ...config.vias, ...(opcoes.vias || {}) };
  const segundaVia = !!opcoes.segundaVia;
  const jobs = [];

  if (vias.cliente) {
    const copias = opcoes.copias || config.copiasCliente || 1;
    for (let i = 0; i < copias; i++) {
      jobs.push(fila.enfileirar({
        pedidoId: pedido.id,
        numero: pedido.numero,
        via: 'cliente',
        descricao: `Comanda ${pedido.numero}${segundaVia ? ' (2a via)' : ''}`,
        nomeImpressora: config.nomeImpressora,
        buffer: layout.comprovanteCliente(pedido, config, { segundaVia })
      }));
    }
  }

  if (vias.cozinha) {
    jobs.push(fila.enfileirar({
      pedidoId: pedido.id,
      numero: pedido.numero,
      via: 'cozinha',
      descricao: `Cozinha ${pedido.numero}${segundaVia ? ' (2a via)' : ''}`,
      nomeImpressora: config.nomeImpressora,
      buffer: layout.viaCozinha(pedido, config, { segundaVia })
    }));
  }

  if (jobs.length === 0) {
    return { enfileirado: false, motivo: 'nenhuma_via_ativa' };
  }

  return { enfileirado: true, jobs };
}

/*
 * Pagina de teste. `pedido` opcional renderiza um comprovante real, o que
 * permite iterar no layout sem precisar criar venda.
 */
function imprimirTeste({ configTemporaria = null, pedido = null } = {}) {
  const config = configTemporaria
    ? { ...carregarConfig(), ...configTemporaria }
    : carregarConfig();

  if (!config.nomeImpressora) {
    return { enfileirado: false, motivo: 'sem_impressora' };
  }

  const buffer = pedido
    ? layout.comprovanteCliente(pedido, config, {})
    : escpos.paginaTeste(config);

  const id = fila.enfileirar({
    pedidoId: pedido ? pedido.id : null,
    numero: pedido ? pedido.numero : null,
    via: 'teste',
    descricao: pedido ? `Teste comanda ${pedido.numero}` : 'Pagina de teste',
    nomeImpressora: config.nomeImpressora,
    buffer
  });

  return { enfileirado: true, jobs: [id] };
}

module.exports = {
  CONFIG_PADRAO,
  carregarConfig,
  salvarConfig,
  imprimirPedido,
  imprimirTeste,
  listarImpressoras: driver.listarImpressoras,
  statusFila: fila.statusFila,
  aoEvento: fila.aoEvento,
  escpos,
  layout
};
