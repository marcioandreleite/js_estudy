//Uma função pura é uma função em que o valor
//de retorno é determinado APENAS por seus valores
//de entrada, sem efetos colaterais observáveis

//impura - PI é um valor externo
const PI = 3.14
function areaCirc(raio) {
    return raio * raio * PI
}
console.log(areaCirc(10))

const PI1 = 3.14
function areaCirc1(raio) {
    return raio * raio * Math.PI //estavel
}
console.log(areaCirc1(10))

//pura
function areaCircPura(raio, pi) {
    return raio * raio * PI
}
console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.141592))
console.log(areaCircPura(10, Math.PI))

