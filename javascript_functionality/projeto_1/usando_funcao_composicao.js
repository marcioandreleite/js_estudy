const fn = require('./funcoes')
const path = require('path')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')'
]

const palavrasMaisUsadas = fn.composicao(
    fn.lerDiretorio,
    fn.elementoTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerSerVazio,
    fn.removerSeIncluir('-->'),
    fn.removerSeapenasNumero,
    fn.removerSimbulos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerSerVazio,
    fn.removerSeapenasNumero,
    fn.agruparElementos,
    fn.ordernarPorAtriNumericos('qtde', 'desc'),
)
palavrasMaisUsadas(caminho)
    .then(console.log)

