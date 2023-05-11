//funções que operão em outras funções,
//tomando-as como argumentos ou retornando-as,
//são chamadas de higher-order-functions 

function executar(fn, ...params) {
    return fn(...params)
}
function executar1(fn, ...params) {
    return function (textoInicial) {
        return `${textoInicial} ${fn(...params)}`
    }
}
function somar(a, b, c) {
    return a + b + c
}
function multi(a, b) {
    return a * b
}
const r1 = executar(somar, 4, 5, 6)
const r2 = executar(multi, 30, 40)

console.log(r1, r2)

const r11 = executar1(somar, 4, 5, 6)('O resultado da soma é')
const r21 = executar1(multi, 30, 40)('O resultado da multiplicação é')

console.log(r11)
console.log(r21)