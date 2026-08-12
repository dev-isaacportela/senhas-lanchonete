/*
 * spike.js — Etapa 1 do specs/07_agente_impressao_spec.md
 *
 * Prova de que um processo rodando no PC do caixa recebe bytes ESC/POS do
 * servidor na VPS e transforma isso em papel. Nada alem disso.
 *
 * O que este spike NAO tem, de proposito:
 *   - deduplicacao por jobId (Etapa 5) — reenviar o mesmo job imprime de novo
 *   - fila local ou retry (Etapa 4) — job que chega com o agente ocupado se perde
 *   - reporte continuo de impressoras (Etapa 7)
 *
 * O agente e um driver burro: ele nunca monta o comprovante, so escreve os
 * bytes que chegam prontos. E o que permite mexer no layout pela aba
 * Impressora sem nunca mais tocar na maquina do caixa.
 */

require('dotenv').config();

const os = require('os');
const { io } = require('socket.io-client');

// Reaproveita o driver do backend sem copiar nada: ele so usa modulos nativos
// do Node, entao funciona aqui sem instalar as dependencias do servidor.
const driver = require('../backend/services/printer/driver-windows');

const SERVIDOR_URL = (process.env.SERVIDOR_URL || '').trim();
const AGENTE_TOKEN = (process.env.AGENTE_TOKEN || '').trim();

function log(...args) {
  console.log(`[${new Date().toLocaleTimeString('pt-BR')}]`, ...args);
}

if (!SERVIDOR_URL || !AGENTE_TOKEN) {
  console.error('Faltou configuracao. Copie o .env.example para .env e preencha:');
  console.error('  SERVIDOR_URL — o endereco publico do servidor, com https://');
  console.error('  AGENTE_TOKEN — o mesmo valor definido no servidor');
  process.exit(1);
}

if (!driver.disponivel()) {
  console.error(`Este processo roda em ${process.platform}, nao em Windows.`);
  console.error('O agente precisa rodar no PC em que a impressora esta ligada.');
  process.exit(1);
}

async function impressorasInstaladas() {
  try {
    return await driver.listarImpressoras();
  } catch (err) {
    log('Nao consegui listar as impressoras:', err.mensagem || err.message);
    return [];
  }
}

// Saida deliberada nossa (token recusado, Ctrl+C) nao deve imprimir o aviso
// de reconexao — dizer "tentando reconectar" logo depois de "token recusado"
// e a confusao que a saida imediata existe para evitar.
let encerrando = false;

log(`Conectando em ${SERVIDOR_URL}`);

const socket = io(SERVIDOR_URL, {
  transports: ['websocket', 'polling'],
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 10000
});

socket.on('connect', async () => {
  const impressoras = await impressorasInstaladas();

  socket.emit('agente_registrar', {
    token: AGENTE_TOKEN,
    hostname: os.hostname(),
    impressoras
  }, (resposta) => {
    if (!resposta || !resposta.ok) {
      // Token errado nao adianta tentar de novo: sair e mais honesto do que
      // ficar reconectando em silencio para sempre.
      encerrando = true;
      console.error('Registro recusado pelo servidor:', (resposta && resposta.erro) || 'sem resposta');
      console.error('Confira se o AGENTE_TOKEN daqui e o mesmo do servidor.');
      socket.close();
      process.exit(1);
    }

    log(`Registrado como ${os.hostname()} — ${impressoras.length} impressora(s):`);
    impressoras.forEach(nome => log(`   - ${nome}`));
    log('Aguardando trabalhos.');
  });
});

socket.on('agente_imprimir', async (job = {}, ack) => {
  const responder = typeof ack === 'function' ? ack : () => {};
  const { jobId, nomeImpressora, descricao, bufferBase64 } = job;

  log(`Job ${jobId} recebido: ${descricao} -> ${nomeImpressora}`);

  if (!nomeImpressora || !bufferBase64) {
    responder({ ok: false, motivo: 'job_invalido', erro: 'Job sem impressora ou sem bytes.' });
    return;
  }

  try {
    const buffer = Buffer.from(bufferBase64, 'base64');
    const resultado = await driver.imprimirRaw(nomeImpressora, buffer, descricao || 'Comprovante');

    log(`Job ${jobId} impresso (${resultado.bytes} bytes)`);
    responder({ ok: true, bytes: resultado.bytes });
  } catch (err) {
    log(`Job ${jobId} falhou: ${err.mensagem || err.message}`);
    responder({
      ok: false,
      motivo: err.motivo || 'erro_desconhecido',
      erro: err.mensagem || err.message
    });
  }
});

socket.on('disconnect', (motivo) => {
  if (encerrando) return;
  log(`Desconectado (${motivo}). Tentando reconectar...`);
});

socket.on('connect_error', (err) => {
  log(`Falha ao conectar: ${err.message}`);
});

socket.io.on('reconnect', (tentativa) => {
  log(`Reconectado na tentativa ${tentativa}.`);
});

process.on('SIGINT', () => {
  encerrando = true;
  log('Encerrando.');
  socket.close();
  process.exit(0);
});
