/*
 * spike-print.js — Etapa 1 e 2 do plano de execucao.
 *
 * Etapa 1: provar que da para enviar bytes ESC/POS crus para a impressora
 *          USB via spooler do Windows em modo RAW.
 * Etapa 2: descobrir a code page e a largura reais da bobina, imprimindo
 *          uma regua de colunas e uma frase com acentuacao.
 *
 * Uso:
 *   node backend/scripts/spike-print.js --impressora "POS-58"
 *   node backend/scripts/spike-print.js --impressora "POS-58" --codepage 16   (WPC1252)
 *   node backend/scripts/spike-print.js --listar                              (lista impressoras)
 *   node backend/scripts/spike-print.js --impressora "POS-58" --arquivo       (so gera o .bin, nao imprime)
 *
 * O que observar no papel:
 *   1. Saiu papel impresso?
 *   2. O corte automatico funcionou?
 *   3. Apareceu alguma caixa de dialogo do Windows? (nao deve aparecer)
 *   4. Em qual numero a regua quebra a linha? (32 = bobina 58mm, 48 = 80mm)
 *   5. Qual bloco de acentuacao saiu correto: CP850 (ESC t 2) ou WPC1252 (ESC t 16)?
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const iconv = require('iconv-lite');

const PS_SCRIPT = path.join(__dirname, 'raw-print.ps1');

// ---------- Comandos ESC/POS ----------
const ESC = 0x1b;
const GS = 0x1d;

const CMD = {
  init: Buffer.from([ESC, 0x40]),                    // ESC @
  alinhaEsquerda: Buffer.from([ESC, 0x61, 0]),       // ESC a 0
  alinhaCentro: Buffer.from([ESC, 0x61, 1]),         // ESC a 1
  negritoOn: Buffer.from([ESC, 0x45, 1]),            // ESC E 1
  negritoOff: Buffer.from([ESC, 0x45, 0]),           // ESC E 0
  tamanhoNormal: Buffer.from([GS, 0x21, 0x00]),      // GS ! 0
  tamanhoDuplo: Buffer.from([GS, 0x21, 0x11]),       // GS ! 17 (dobra altura e largura)
  lf: Buffer.from([0x0a]),
  cortar: Buffer.from([GS, 0x56, 0x00])              // GS V 0 (corte total)
};

// Mapa code page ESC/POS -> nome aceito pelo iconv-lite
const CODEPAGES = {
  0: 'cp437',
  2: 'cp850',
  16: 'win1252',
  17: 'cp858'
};

function selecionarCodePage(n) {
  return Buffer.from([ESC, 0x74, n]); // ESC t n
}

function texto(str, codePageId) {
  const encoding = CODEPAGES[codePageId] || 'cp850';
  return iconv.encode(str + '\n', encoding);
}

// ---------- Conteudo do spike ----------
function montarBuffer(codePageId) {
  const partes = [];
  const push = (...bufs) => partes.push(...bufs);

  push(CMD.init);

  // Cabecalho em fonte dupla e centralizado — valida alinhamento e tamanho
  push(CMD.alinhaCentro, CMD.tamanhoDuplo, CMD.negritoOn);
  push(texto('SPIKE ESC/POS', 0)); // ASCII puro, sem depender de code page
  push(CMD.negritoOff, CMD.tamanhoNormal, CMD.alinhaEsquerda);
  push(CMD.lf);

  // ETAPA 2a — regua de colunas.
  // Conte ate onde a linha vai antes de quebrar: 32 = 58mm, 48 = 80mm.
  push(texto('--- REGUA DE COLUNAS ---', 0));
  let regua = '';
  for (let i = 1; i <= 48; i++) regua += String(i % 10);
  push(texto(regua, 0));
  push(texto('....^....10...^...20...^...30...^...40..^..48', 0));
  push(CMD.lf);

  // ETAPA 2b — acentuacao nas duas code pages candidatas.
  const frase = 'Acao, pessego, comanda n 1, R$ 5,00';
  const fraseAcentuada = 'Ação, pêssego, comanda nº 1, R$ 5,00';

  push(texto('--- ACENTUACAO ---', 0));

  push(selecionarCodePage(2));
  push(texto('[CP850  / ESC t 2]', 2));
  push(texto(fraseAcentuada, 2));
  push(texto('ç ã ê º á é í ó ú Ç Ã', 2));

  push(selecionarCodePage(16));
  push(texto('[WPC1252 / ESC t 16]', 16));
  push(texto(fraseAcentuada, 16));
  push(texto('ç ã ê º á é í ó ú Ç Ã', 16));

  // Fallback sem acentos, para comparar
  push(selecionarCodePage(codePageId));
  push(texto('[SEM ACENTOS - fallback]', 0));
  push(texto(frase, 0));

  push(CMD.lf);
  push(texto('Se este bloco saiu legivel, RAW funciona.', 0));

  // Feed antes do corte, senao o corte come as ultimas linhas
  push(CMD.lf, CMD.lf, CMD.lf);
  push(CMD.cortar);

  return Buffer.concat(partes);
}

// ---------- Envio ----------
function listarImpressoras() {
  const saida = execFileSync('powershell.exe', [
    '-NoProfile',
    '-NonInteractive',
    '-Command',
    'Get-Printer | Select-Object -ExpandProperty Name'
  ], { encoding: 'utf8' });
  return saida.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
}

function imprimirRaw(nomeImpressora, buffer) {
  const tmpFile = path.join(os.tmpdir(), `escpos-spike-${Date.now()}.bin`);
  fs.writeFileSync(tmpFile, buffer);

  try {
    const saida = execFileSync('powershell.exe', [
      '-NoProfile',
      '-NonInteractive',
      '-ExecutionPolicy', 'Bypass',
      '-File', PS_SCRIPT,
      '-PrinterName', nomeImpressora,
      '-FilePath', tmpFile
    ], { encoding: 'utf8' });
    return { ok: true, saida: saida.trim() };
  } catch (err) {
    const detalhe = (err.stderr || err.message || '').toString().trim();
    return { ok: false, erro: detalhe };
  } finally {
    try { fs.unlinkSync(tmpFile); } catch { /* arquivo temporario, ignorar */ }
  }
}

// ---------- CLI ----------
function argOf(flag, fallback = null) {
  const i = process.argv.indexOf(flag);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

function main() {
  if (process.argv.includes('--listar')) {
    console.log('Impressoras instaladas no Windows:');
    listarImpressoras().forEach(n => console.log(`  - ${n}`));
    return;
  }

  const codePageId = parseInt(argOf('--codepage', '2'), 10);
  const buffer = montarBuffer(codePageId);

  if (process.argv.includes('--arquivo')) {
    const destino = path.join(__dirname, 'spike-output.bin');
    fs.writeFileSync(destino, buffer);
    console.log(`Buffer de ${buffer.length} bytes gravado em ${destino} (nao enviado a impressora).`);
    return;
  }

  const nomeImpressora = argOf('--impressora');
  if (!nomeImpressora) {
    console.error('Informe a impressora: node spike-print.js --impressora "NOME EXATO"');
    console.error('Para ver os nomes disponiveis: node spike-print.js --listar');
    process.exit(1);
  }

  console.log(`Enviando ${buffer.length} bytes RAW para "${nomeImpressora}"...`);
  const resultado = imprimirRaw(nomeImpressora, buffer);

  if (resultado.ok) {
    console.log('Job aceito pelo spooler.');
    console.log('');
    console.log('Agora confira no papel:');
    console.log('  [ ] Saiu papel impresso');
    console.log('  [ ] O corte automatico funcionou');
    console.log('  [ ] Nenhuma caixa de dialogo do Windows apareceu');
    console.log('  [ ] Em qual numero a regua quebrou a linha? (32 = 58mm, 48 = 80mm)');
    console.log('  [ ] Qual bloco de acentuacao saiu correto: CP850 ou WPC1252?');
  } else {
    console.error('FALHA no envio RAW:');
    console.error(`  ${resultado.erro}`);
    console.error('');
    console.error('Fallback a tentar (exige a impressora compartilhada no Windows):');
    console.error('  node spike-print.js --arquivo');
    console.error('  copy /b backend\\scripts\\spike-output.bin \\\\localhost\\NOME_COMPARTILHADO');
    process.exit(1);
  }
}

main();
