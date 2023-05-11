// const nome = 'luis'
// const sobrenome = 'miranda'

// const falanome = () => nome + ' ' + sobrenome

// // module.exports.nome = nome
// // module.exports.sobrenome = sobrenome
// // module.exports.falanome = falanome

// exports.nome = nome
// exports.sobrenome = sobrenome
// exports.falanome = falanome

// this.qualquercoisa = 'qualquer coisa'

// console.log(module.exports) 

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

const nome = 'luis'
const sobrenome = 'miranda'

module.exports = {
    nome, sobrenome, Pessoa
}
// exports.Pessoa = Pessoa