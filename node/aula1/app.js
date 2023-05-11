// const mod1 = require('./mod1')
// const falanome = require('./mod1').falanome
// const falanome = mod1.falanome
// const { nome, sobrenome, falanome } = require('./mod1')
const path = require('path')
const axios = require('axios')
const { Pessoa } = require('./mod1')
const mod1 = require('./mod1')

// console.log(nome, sobrenome)
// console.log(falanome())
const p1 = new Pessoa('marcio')
console.log(p1)
console.log(mod1)

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e))


