const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]
const qtdeMaiorQueZero = item => item.qtde > 0
const itensValido = carrinho.filter(qtdeMaiorQueZero)
console.log(itensValido)

//
const getNome = item => item.nome
const qtdeMaiorQueZero1 = item => item.qtde > 0
const nomeItensValido = carrinho
    .filter(qtdeMaiorQueZero1)
    .map(getNome)
console.log(nomeItensValido)

//
const getNome1 = item => item.nome
const qtdeMaiorQueZero2 = item => item.qtde > 0
const qtdeMaiorOuIgualAZero = item => item.qtde >= 0
const qtdeMuitoGrande = item => item.qtde > 1000
const nomeItensValido1 = carrinho
    .filter(qtdeMaiorQueZero2)
    .map(getNome1)
console.log(nomeItensValido1)

//
Array.prototype.meuFilter = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}
const nomeItensValido2 = carrinho
    .meuFilter(qtdeMaiorQueZero1)
    .map(getNome)
console.log(nomeItensValido2)
