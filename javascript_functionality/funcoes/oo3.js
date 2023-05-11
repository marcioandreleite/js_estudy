// function produto(nome, preco, desc = 0.15) {
//     this.nome = nome
//     this.preco = preco
//     this.desc = desc

//     // this.precoFinal = () => this.preco * (1 - this.desc)
//     this.precoFinal = function () {
//         return this.preco * (1 - this.desc)
//     }
// }
// //
// produto.prototype.log = function () {
//     console.log(`Nome: ${this.nome} Preço: R$${this.preco}`)
// }

// const p1 = new produto('Caneta', 8.59)
// console.log(p1)
// p1.log()

// const p2 = new produto('Geladeira', 2345.98)
// console.log(p2)
// console.log(p1.precoFinal().toFixed(2))
// console.log(p2.precoFinal().toFixed(2))

//
function produto(nome, preco, desc = 0.15) {
    this.nome = nome
    this.preco = preco
    this._desc = desc

    // this.precoFinal = () => this.preco * (1 - this.desc)
    this.precoFinal = function () {
        return this.preco * (1 - this._desc)
    }
}
//
produto.prototype.log = function () {
    console.log(`Nome: ${this.nome} Preço: R$${this.preco}`)
}
//
Object.defineProperty(produto.prototype, 'desc', {
    get: function () {
        return this._desc
    },
    set: function (novoDesc) {
        if (novoDesc >= 0 && novoDesc <= 1) {
            this._desc = novoDesc
        }
    }
})
Object.defineProperty(produto.prototype, 'descString', {
    get: function () {
        return `${this._desc * 100}% de desconto`
    }
})

const p1 = new produto('Caneta', 8.59)
console.log(p1)
p1.log()

const p2 = new produto('Geladeira', 2345.98)
console.log(p2)
console.log(p1.precoFinal().toFixed(2))
console.log(p2.precoFinal().toFixed(2))
p2.desc = 0.99
console.log(p2.desc)
console.log(p2.descString)