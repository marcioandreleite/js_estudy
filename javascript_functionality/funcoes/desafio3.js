const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')

function lerArquivos(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depoisde de ler')
    })
}
lerArquivos(caminho)
    .then(conteudo => conteudo.split('\n'))
    // .then(linhas => console.log(linhas[1]))
    // .then(linhas => console.log(linhas.length))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
