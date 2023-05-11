// const fs = require('fs').promises
// const path = require('path')
// const caminhoDoArquivo = path.resolve(__dirname, '..', 'teste.txt')

// fs.writeFile(caminhoDoArquivo, 'Frase 1\n', { flag: 'a' })

const fs = require('fs').promises

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' })
}
// const path = require('path')
// const caminhoDoArquivo = path.resolve(__dirname, '..', 'teste.json')

// const pessoas = [
//     { 'nome': 'joão' },
//     { 'nome': 'Maria' },
//     { 'nome': 'Paulo' },
//     { 'nome': 'Henrique' },
// ]
// const json = JSON.stringify(pessoas, '', 2)
