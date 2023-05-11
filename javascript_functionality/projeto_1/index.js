const fn = require('./funcoes')
const path = require('path')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')'
]

fn.lerDiretorio(caminho)
    .then(fn.elementoTerminadosCom('.srt'))
    .then(fn.lerArquivos)
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerSerVazio)
    .then(fn.removerSeIncluir('-->'))
    .then(fn.removerSeapenasNumero)
    .then(fn.removerSimbulos(simbolos))
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerSerVazio)
    .then(fn.removerSeapenasNumero)
    .then(fn.agruparElementos)
    .then(fn.ordernarPorAtriNumericos('qtde', 'desc'))
    .then(console.log)