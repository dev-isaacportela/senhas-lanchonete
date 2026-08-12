/*
 * escpos.js — construtor de comandos ESC/POS.
 *
 * Impressora termica nao entende UTF-8: o texto e convertido para a code page
 * selecionada com iconv-lite, e a code page e anunciada com ESC t n.
 *
 * Toda largura sai de `larguraColunas` (32 para bobina de 58mm, 48 para 80mm).
 * Nada de coluna hardcoded, senao trocar de bobina quebraria o layout inteiro.
 */

const iconv = require('iconv-lite');

const ESC = 0x1b;
const GS = 0x1d;

// Nome da code page -> indice do comando ESC t n
const CODE_PAGES = {
  cp437: 0,
  cp850: 2,
  cp860: 3,   // Portugues
  cp858: 19,
  win1252: 16 // WPC1252
};

const ALINHAMENTO = { esquerda: 0, centro: 1, direita: 2 };

const TAMANHOS = {
  normal: 0x00,
  duploAltura: 0x01,
  duploLargura: 0x10,
  duplo: 0x11
};

function normalizarCodePage(nome) {
  const chave = String(nome || 'cp850').toLowerCase().replace(/[^a-z0-9]/g, '');
  return CODE_PAGES[chave] !== undefined ? chave : 'cp850';
}

class EscPos {
  constructor({ larguraColunas = 32, codePage = 'cp850', semAcentos = false } = {}) {
    this.largura = parseInt(larguraColunas, 10) || 32;
    this.codePage = normalizarCodePage(codePage);
    this.semAcentos = !!semAcentos;
    this.partes = [];
  }

  _push(buf) {
    this.partes.push(buf);
    return this;
  }

  _codificar(str) {
    const texto = this.semAcentos
      ? String(str).normalize('NFD').replace(/\p{Diacritic}/gu, '')
      : String(str);
    return iconv.encode(texto, this.codePage);
  }

  init() {
    this._push(Buffer.from([ESC, 0x40]));                              // ESC @
    this._push(Buffer.from([ESC, 0x74, CODE_PAGES[this.codePage]]));   // ESC t n
    return this;
  }

  alinhar(posicao) {
    const n = ALINHAMENTO[posicao] ?? 0;
    return this._push(Buffer.from([ESC, 0x61, n]));
  }

  negrito(ligado = true) {
    return this._push(Buffer.from([ESC, 0x45, ligado ? 1 : 0]));
  }

  tamanho(nome = 'normal') {
    const n = TAMANHOS[nome] ?? TAMANHOS.normal;
    return this._push(Buffer.from([GS, 0x21, n]));
  }

  // Escreve uma linha, quebrando em varias se passar da largura da bobina.
  texto(str = '') {
    for (const linha of this.quebrar(String(str))) {
      this._push(this._codificar(linha));
      this._push(Buffer.from([0x0a]));
    }
    return this;
  }

  // Texto cru, sem quebra automatica (usado em fonte dupla, que ocupa 2x).
  textoBruto(str = '') {
    this._push(this._codificar(String(str)));
    this._push(Buffer.from([0x0a]));
    return this;
  }

  linha(caractere = '-') {
    return this.textoBruto(caractere.repeat(this.largura));
  }

  /*
   * Duas colunas na mesma linha, com a direita colada na margem direita.
   * Se a esquerda for longa demais, ela quebra em varias linhas e o valor
   * fica na ultima — que e o comportamento certo para "2x Nome longo  R$ X".
   */
  linhaColunas(esquerda = '', direita = '') {
    const dir = String(direita);
    const espacoEsquerda = this.largura - dir.length - 1;

    if (espacoEsquerda <= 0) {
      // Coluna direita sozinha ja ocupa a linha toda
      return this.textoBruto(dir.slice(0, this.largura));
    }

    const linhas = this.quebrar(String(esquerda), espacoEsquerda);
    const ultima = linhas.pop() ?? '';

    for (const l of linhas) this.textoBruto(l);

    const preenchimento = ' '.repeat(Math.max(1, this.largura - ultima.length - dir.length));
    return this.textoBruto(`${ultima}${preenchimento}${dir}`);
  }

  centralizar(str = '') {
    const texto = String(str).slice(0, this.largura);
    const sobra = Math.max(0, Math.floor((this.largura - texto.length) / 2));
    return this.textoBruto(' '.repeat(sobra) + texto);
  }

  // Quebra respeitando palavras; palavra maior que a largura e cortada.
  quebrar(str, largura = this.largura) {
    const palavras = String(str).split(/\s+/).filter(Boolean);
    if (palavras.length === 0) return [''];

    const linhas = [];
    let atual = '';

    for (let palavra of palavras) {
      while (palavra.length > largura) {
        if (atual) { linhas.push(atual); atual = ''; }
        linhas.push(palavra.slice(0, largura));
        palavra = palavra.slice(largura);
      }

      if (!atual) {
        atual = palavra;
      } else if (atual.length + 1 + palavra.length <= largura) {
        atual += ' ' + palavra;
      } else {
        linhas.push(atual);
        atual = palavra;
      }
    }

    if (atual) linhas.push(atual);
    return linhas;
  }

  feed(linhas = 1) {
    return this._push(Buffer.from(Array(Math.max(1, linhas)).fill(0x0a)));
  }

  cortar() {
    return this._push(Buffer.from([GS, 0x56, 0x00])); // GS V 0
  }

  build() {
    return Buffer.concat(this.partes);
  }
}

/*
 * Pagina de teste: regua de colunas para conferir a largura e amostra de
 * acentuacao para conferir a code page. E o diagnostico da Etapa 2 feito
 * pela interface, sem precisar rodar script.
 */
function paginaTeste(config = {}) {
  const doc = new EscPos(config);
  const largura = doc.largura;

  doc.init();

  doc.alinhar('centro').negrito(true).tamanho('duplo');
  doc.textoBruto('TESTE');
  doc.tamanho('normal').negrito(false);
  doc.textoBruto(`${largura} colunas / ${doc.codePage}`);
  doc.alinhar('esquerda');

  doc.linha();
  doc.textoBruto('REGUA DE COLUNAS');
  let regua = '';
  for (let i = 1; i <= largura; i++) regua += String(i % 10);
  doc.textoBruto(regua);
  doc.textoBruto('|' + '-'.repeat(Math.max(0, largura - 2)) + '|');

  doc.linha();
  doc.textoBruto('ACENTUACAO');
  doc.texto('Ação, pêssego, comanda nº 1');
  doc.texto('ç ã ê º á é í ó ú Ç Ã');

  doc.linha();
  doc.textoBruto('ALINHAMENTO');
  doc.linhaColunas('2x Waffle', 'R$   8,00');
  doc.linhaColunas('1x Torta de morango com chocolate', 'R$  10,00');
  doc.linha();
  doc.negrito(true).linhaColunas('TOTAL', 'R$  18,00').negrito(false);

  doc.linha();
  doc.alinhar('centro').textoBruto('Se esta pagina saiu alinhada');
  doc.textoBruto('e com acentos, esta configurado.');
  doc.alinhar('esquerda');

  doc.feed(3).cortar();

  return doc.build();
}

module.exports = {
  EscPos,
  CODE_PAGES,
  normalizarCodePage,
  paginaTeste
};
