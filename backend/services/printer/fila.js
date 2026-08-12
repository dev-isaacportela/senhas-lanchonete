/*
 * fila.js — fila serial de impressao.
 *
 * Impressora termica nao aceita jobs concorrentes: dois pedidos ao mesmo
 * tempo saem embaralhados no mesmo papel. Entao os jobs viram uma fila
 * processada um de cada vez, com 3 tentativas e backoff curto.
 *
 * Enfileirar nunca bloqueia quem chamou. Venda nao pode travar por causa
 * de periferico — a falha vira evento e aviso na tela, nunca erro na venda.
 */

const driver = require('./driver-windows');

const MAX_TENTATIVAS = 3;
const BACKOFF_MS = [400, 1200];   // espera antes da 2a e da 3a tentativa
const MAX_HISTORICO = 30;

const fila = [];
const historico = [];

let processando = false;
let ouvinte = null;   // callback (evento, payload) para o server.js emitir socket

function aoEvento(callback) {
  ouvinte = callback;
}

function notificar(evento, payload) {
  if (ouvinte) {
    try {
      ouvinte(evento, payload);
    } catch (err) {
      console.error('[impressao] falha ao notificar:', err);
    }
  }
}

function registrarHistorico(entrada) {
  historico.unshift(entrada);
  if (historico.length > MAX_HISTORICO) historico.length = MAX_HISTORICO;
}

const esperar = (ms) => new Promise(r => setTimeout(r, ms));

/*
 * Enfileira um job. `job` traz o buffer ja montado e os metadados usados
 * nos eventos e no historico.
 */
function enfileirar(job) {
  const entrada = {
    id: `job-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    criadoEm: new Date().toISOString(),
    tentativas: 0,
    ...job
  };

  fila.push(entrada);
  processar();
  return entrada.id;
}

async function processar() {
  if (processando) return;
  processando = true;

  try {
    while (fila.length) {
      const job = fila.shift();
      await executarComRetry(job);
    }
  } finally {
    processando = false;
  }
}

async function executarComRetry(job) {
  let ultimoErro = null;

  for (let tentativa = 1; tentativa <= MAX_TENTATIVAS; tentativa++) {
    job.tentativas = tentativa;

    try {
      await driver.imprimirRaw(job.nomeImpressora, job.buffer, job.descricao || 'Comprovante');

      registrarHistorico({
        id: job.id,
        pedidoId: job.pedidoId,
        numero: job.numero,
        via: job.via,
        descricao: job.descricao,
        ok: true,
        tentativas: tentativa,
        quandoEm: new Date().toISOString()
      });

      notificar('impressao_status', {
        pedidoId: job.pedidoId,
        numero: job.numero,
        via: job.via,
        ok: true,
        tentativas: tentativa
      });

      return true;
    } catch (err) {
      ultimoErro = err;

      const semRetry = err.motivo === 'sem_impressora'
        || err.motivo === 'impressora_nao_encontrada'
        || err.motivo === 'script_ausente';

      if (semRetry || tentativa === MAX_TENTATIVAS) break;

      await esperar(BACKOFF_MS[tentativa - 1] || 1000);
    }
  }

  const motivo = ultimoErro?.motivo || 'erro_desconhecido';
  const mensagem = ultimoErro?.mensagem || String(ultimoErro?.message || 'Falha ao imprimir.');

  console.error(`[impressao] job ${job.id} falhou (${motivo}): ${mensagem}`);

  registrarHistorico({
    id: job.id,
    pedidoId: job.pedidoId,
    numero: job.numero,
    via: job.via,
    descricao: job.descricao,
    ok: false,
    motivo,
    erro: mensagem,
    tentativas: job.tentativas,
    quandoEm: new Date().toISOString()
  });

  // Falha silenciosa significa cliente sem comprovante: sempre avisa a tela.
  notificar('impressao_falhou', {
    pedidoId: job.pedidoId,
    numero: job.numero,
    via: job.via,
    motivo,
    erro: mensagem,
    tentativas: job.tentativas
  });

  return false;
}

function statusFila() {
  return {
    pendentes: fila.length,
    processando,
    historico
  };
}

module.exports = {
  MAX_TENTATIVAS,
  enfileirar,
  statusFila,
  historico,
  aoEvento
};
