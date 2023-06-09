const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err, conteudo) {
    console.log(conteudo);
    console.log(conteudo.toString());
}
fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))

console.log('inicio...');
fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('fim...');

console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')