/*
 * store.js — estado em memoria e persistencia em disco.
 *
 * Antes isso eram variaveis soltas no topo do server.js. Os modulos de
 * estoque, pedidos e impressao precisam alcancar o mesmo estado sem
 * require circular, entao ele mora aqui e todo mundo importa deste ponto.
 *
 * Os caches sao propriedades do objeto exportado (store.orders, store.menu...)
 * e nao variaveis destrutradas, porque alguns deles sao reatribuidos.
 */

const fs = require('fs');
const path = require('path');

// LANCHONETE_DATA_DIR permite apontar o servidor para uma copia dos dados
// durante testes, e e o que leva a producao para o disco persistente do Render
// (/var/data), fora do container que e recriado a cada deploy.
const DATA_DIR = process.env.LANCHONETE_DATA_DIR
  ? path.resolve(process.env.LANCHONETE_DATA_DIR)
  : path.join(__dirname, 'data');

// A pasta versionada do repositorio. Quando DATA_DIR aponta para outro lugar,
// ela deixa de ser a copia viva e vira so a semente do primeiro boot.
const SEED_DIR = path.join(__dirname, 'data');

// Configuracao, nao estado de operacao: existe no git e serve de ponto de
// partida numa instalacao nova. orders.json e logs.json ficam de fora de
// proposito — nascem vazios, pelo fallback do readJSON.
const ARQUIVOS_SEMENTE = ['menu.json', 'users.json', 'pix-config.json'];

const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const MENU_FILE = path.join(DATA_DIR, 'menu.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const LOGS_FILE = path.join(DATA_DIR, 'logs.json');
const PIX_CONFIG_FILE = path.join(DATA_DIR, 'pix-config.json');
const PRINTER_CONFIG_FILE = path.join(DATA_DIR, 'printer-config.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

/*
 * Semeia um DATA_DIR externo no primeiro boot.
 *
 * Um disco persistente nasce vazio: sem isso o servidor subiria sem cardapio
 * e sem usuarios, e ninguem conseguiria nem entrar. So copia o que esta
 * faltando — o arquivo que ja existe no disco e a copia viva da operacao e
 * nunca pode ser sobrescrito pelo estado do commit, que e exatamente o
 * problema que o disco veio resolver.
 */
function semearDadosIniciais() {
  if (DATA_DIR === path.resolve(SEED_DIR)) return;

  for (const nome of ARQUIVOS_SEMENTE) {
    const destino = path.join(DATA_DIR, nome);
    const origem = path.join(SEED_DIR, nome);

    if (fs.existsSync(destino) || !fs.existsSync(origem)) continue;

    try {
      fs.copyFileSync(origem, destino);
      console.log(`[store] semente copiada para o disco: ${nome}`);
    } catch (err) {
      console.error(`[store] falha ao copiar a semente ${nome}:`, err);
    }
  }
}

semearDadosIniciais();

function readJSON(filePath, fallback = []) {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (err) {
    console.error(`Erro ao ler arquivo ${filePath}:`, err);
    return fallback;
  }
}

function writeJSON(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`Erro ao salvar arquivo ${filePath}:`, err);
  }
}

/*
 * Migracao implicita do schema de estoque.
 *
 * Todo produto ganha controlaEstoque/estoque/estoqueMinimo quando ausentes.
 * Padrao é controle DESLIGADO, entao os produtos ja cadastrados continuam
 * vendendo ilimitado ate o gerente ativar o controle item a item.
 */
function normalizarProdutoEstoque(produto) {
  const normalizado = { ...produto };
  let mudou = false;

  if (typeof normalizado.controlaEstoque !== 'boolean') {
    normalizado.controlaEstoque = false;
    mudou = true;
  }
  if (typeof normalizado.estoque !== 'number' || Number.isNaN(normalizado.estoque)) {
    normalizado.estoque = 0;
    mudou = true;
  }
  if (typeof normalizado.estoqueMinimo !== 'number' || Number.isNaN(normalizado.estoqueMinimo)) {
    normalizado.estoqueMinimo = 0;
    mudou = true;
  }

  return { produto: normalizado, mudou };
}

function normalizarMenu(menu) {
  const base = {
    categorias: Array.isArray(menu && menu.categorias) ? menu.categorias : [],
    produtos: Array.isArray(menu && menu.produtos) ? menu.produtos : []
  };

  let mudou = false;
  base.produtos = base.produtos.map(p => {
    const resultado = normalizarProdutoEstoque(p);
    if (resultado.mudou) mudou = true;
    return resultado.produto;
  });

  return { menu: base, mudou };
}

// Instancia do Socket.io, injetada pelo server.js logo apos criar o io.
let io = null;

function setIo(instancia) {
  io = instancia;
}

function getIo() {
  return io;
}

function emitir(evento, payload) {
  if (io) io.emit(evento, payload);
}

const store = {
  // Caminhos
  DATA_DIR,
  ORDERS_FILE,
  MENU_FILE,
  USERS_FILE,
  LOGS_FILE,
  PIX_CONFIG_FILE,
  PRINTER_CONFIG_FILE,

  // Caches sincronizados com os arquivos JSON
  orders: readJSON(ORDERS_FILE, []),
  menu: normalizarMenu(readJSON(MENU_FILE, { categorias: [], produtos: [] })).menu,
  users: readJSON(USERS_FILE, []),
  auditLogs: readJSON(LOGS_FILE, []),

  normalizarProdutoEstoque,

  // Persistencia
  readJSON,
  writeJSON,
  salvarPedidos() { writeJSON(ORDERS_FILE, store.orders); },
  salvarMenu() { writeJSON(MENU_FILE, store.menu); },
  salvarUsuarios() { writeJSON(USERS_FILE, store.users); },

  // Socket
  setIo,
  getIo,
  emitir,

  // Auditoria
  registrarLog(pedidoId, numeroPedido, cliente, usuario, acao, descricao, itens = null) {
    const newLog = {
      id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      timestamp: new Date().toISOString(),
      pedidoId,
      numeroPedido,
      cliente,
      usuario: usuario || 'Sistema',
      acao,
      descricao,
      itens: itens || null
    };

    store.auditLogs.unshift(newLog);
    if (store.auditLogs.length > 500) store.auditLogs = store.auditLogs.slice(0, 500);
    writeJSON(LOGS_FILE, store.auditLogs);

    emitir('novo_log_auditoria', newLog);

    return newLog;
  }
};

// Persiste a migracao de estoque no primeiro boot, para que menu.json passe a
// carregar os campos novos em vez de depender da normalizacao em memoria.
if (normalizarMenu(readJSON(MENU_FILE, { categorias: [], produtos: [] })).mudou) {
  store.salvarMenu();
  console.log('[store] menu.json migrado com os campos de estoque.');
}

module.exports = store;
