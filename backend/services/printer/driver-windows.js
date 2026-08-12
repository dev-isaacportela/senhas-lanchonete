/*
 * driver-windows.js — envio RAW ao spooler do Windows.
 *
 * Grava o buffer num arquivo temporario e chama o raw-print.ps1, que faz
 * P/Invoke em winspool.drv com pDataType = "RAW". Zero dependencia nativa,
 * zero node-gyp — que e a fonte mais comum de instalacao quebrada no dia
 * do evento.
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFile } = require('child_process');

const PS_SCRIPT = path.join(__dirname, '..', '..', 'scripts', 'raw-print.ps1');
const TIMEOUT_MS = 20000;

/*
 * A impressao depende do spooler do Windows, entao so existe quando o
 * backend roda na mesma maquina Windows em que a impressora esta ligada.
 * Num host Linux (Render, Docker) nao ha o que tentar: melhor dizer isso
 * de uma vez do que estourar 500 ou enfileirar jobs condenados.
 */
const PLATAFORMA_SUPORTADA = process.platform === 'win32';

function erroPlataforma() {
  const erro = new Error('Impressão disponível apenas quando o servidor roda no Windows.');
  erro.motivo = 'plataforma_nao_suportada';
  erro.mensagem = 'Este servidor não é Windows, então não alcança a impressora térmica. '
    + 'A impressão só funciona com o backend rodando no PC em que a impressora está ligada.';
  return erro;
}

function disponivel() {
  return PLATAFORMA_SUPORTADA;
}

// Traduz a falha crua num motivo que o caixa consiga agir em cima.
function classificarErro(mensagem = '') {
  const texto = String(mensagem).toLowerCase();

  if (texto.includes('openprinter')) {
    return {
      motivo: 'impressora_nao_encontrada',
      mensagem: 'Impressora não encontrada no Windows. Confira o nome na configuração.'
    };
  }
  if (texto.includes('startdocprinter') || texto.includes('spooler')) {
    return {
      motivo: 'spooler_ou_driver',
      mensagem: 'O spooler de impressão recusou o trabalho. Verifique se o serviço está rodando.'
    };
  }
  if (texto.includes('writeprinter') || texto.includes('startpageprinter')) {
    return {
      motivo: 'impressora_offline',
      mensagem: 'A impressora não aceitou os dados. Provavelmente está desligada ou sem papel.'
    };
  }
  if (texto.includes('timeout') || texto.includes('etimedout')) {
    return {
      motivo: 'timeout',
      mensagem: 'A impressora não respondeu a tempo. Verifique se está ligada e conectada.'
    };
  }
  if (texto.includes('arquivo nao encontrado') || texto.includes('enoent')) {
    return {
      motivo: 'script_ausente',
      mensagem: 'Script de impressão não encontrado no servidor.'
    };
  }

  return {
    motivo: 'erro_desconhecido',
    mensagem: mensagem ? String(mensagem).trim() : 'Falha desconhecida ao imprimir.'
  };
}

function executarPowerShell(args) {
  return new Promise((resolve, reject) => {
    execFile(
      'powershell.exe',
      ['-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', ...args],
      { encoding: 'utf8', timeout: TIMEOUT_MS, windowsHide: true },
      (err, stdout, stderr) => {
        if (err) {
          const detalhe = (stderr || err.message || '').toString().trim();
          reject(Object.assign(new Error(detalhe), classificarErro(detalhe)));
          return;
        }
        resolve(String(stdout || '').trim());
      }
    );
  });
}

// Lista as impressoras instaladas, para montar o seletor da tela de config.
async function listarImpressoras() {
  if (!PLATAFORMA_SUPORTADA) throw erroPlataforma();

  const saida = await executarPowerShell([
    '-Command',
    'Get-Printer | Select-Object -ExpandProperty Name'
  ]);

  return saida
    .split(/\r?\n/)
    .map(linha => linha.trim())
    .filter(Boolean);
}

// Envia bytes crus. Resolve em sucesso, rejeita com { motivo, mensagem }.
async function imprimirRaw(nomeImpressora, buffer, nomeDocumento = 'Comprovante') {
  if (!PLATAFORMA_SUPORTADA) throw erroPlataforma();

  if (!nomeImpressora) {
    const erro = new Error('Nenhuma impressora configurada.');
    erro.motivo = 'sem_impressora';
    erro.mensagem = 'Nenhuma impressora selecionada na configuração.';
    throw erro;
  }

  const arquivoTemp = path.join(os.tmpdir(), `escpos-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.bin`);
  fs.writeFileSync(arquivoTemp, buffer);

  try {
    await executarPowerShell([
      '-File', PS_SCRIPT,
      '-PrinterName', nomeImpressora,
      '-FilePath', arquivoTemp,
      '-DocName', nomeDocumento
    ]);
    return { ok: true, bytes: buffer.length };
  } finally {
    try { fs.unlinkSync(arquivoTemp); } catch { /* temporario, ignorar */ }
  }
}

module.exports = {
  disponivel,
  PLATAFORMA_SUPORTADA,
  listarImpressoras,
  imprimirRaw,
  classificarErro
};
