//Uma função pura é uma função em que o valor
//de retorno é determinado APENAS por seus valores
//de entrada, sem efetos colaterais observáveis

//mock = simular algo externo que uma função e dependente(testes)

//função pura
function somar(a, b) {
    return a + b
}
console.log(somar(4, 6))
console.log(somar(4, 6))
console.log(somar(4, 6))
console.log(somar(4, 6))
console.log(somar(4, 6))

let = qtdeDeExcusoes = 0
function somar1(a, b) {
    qtdeDeExcusoes++ //efetos colaterais observáveis
    return a + b
}
console.log(qtdeDeExcusoes)
console.log(somar1(4, 6))
console.log(somar1(4, 6))
console.log(somar1(4, 6))
console.log(somar1(4, 6))
console.log(somar1(4, 6))
console.log(qtdeDeExcusoes) 