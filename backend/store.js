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

const DATA_DIR = path.join(__dirname, 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const MENU_FILE = path.join(DATA_DIR, 'menu.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const LOGS_FILE = path.join(DATA_DIR, 'logs.json');
const PIX_CONFIG_FILE = path.join(DATA_DIR, 'pix-config.json');
const PRINTER_CONFIG_FILE = path.join(DATA_DIR, 'printer-config.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

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
  menu: readJSON(MENU_FILE, { categorias: [], produtos: [] }),
  users: readJSON(USERS_FILE, []),
  auditLogs: readJSON(LOGS_FILE, []),

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

module.exports = store;
