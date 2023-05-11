const path = require('path')
const caminhoDoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

// const pessoas = [
//     { 'nome': 'joão' },
//     { 'nome': 'Maria' },
//     { 'nome': 'Paulo' },
//     { 'nome': 'Henrique' },
// ]
// const json = JSON.stringify(pessoas, '', 2)
// escreve(caminhoDoArquivo, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    renderiza(dados)

}

function renderiza(dados) {
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val.nome))
}
lerArquivo(caminhoDoArquivo)