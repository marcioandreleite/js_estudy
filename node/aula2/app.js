// // const multipliccao = require('./mod')
// const aaaa = require('./b/c/d/mod')

// // console.log(multiplicacao(2, 2))
// const cachorrinho = new aaaa('Dog')
// cachorrinho.latir()

// const Cachorro = require('./z/mod2')
// const c1 = new Cachorro('Dog')
// c1.latir()

/* Navigation 
./ front
../ back
*/

const path = require('path')

console.log(path.resolve(__dirname))
console.log(path.resolve(__dirname, '..', '..'))
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'))
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'))
console.log(__filename)
console.log(__dirname)

