//Uma função pura é uma função em que o valor
//de retorno é determinado APENAS por seus valores
//de entrada, sem efetos colaterais observáveis

//impura numeros aleatorios não e determinista
function gerarNumeroaleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}
console.log(gerarNumeroaleatorio(5, 6))
console.log(gerarNumeroaleatorio(5, 6))
console.log(gerarNumeroaleatorio(5, 6))
console.log(gerarNumeroaleatorio(5, 6)) 