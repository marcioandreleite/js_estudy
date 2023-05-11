// class Produto {
//     constructor(nome, preco, desc = 0.15) {
//         this.nome = nome
//         this.preco = preco
//         this.desc = desc
//     }
//     precoFinal() {
//         return this.preco * (1 - this.desc)
//     }
// }
// const p1 = new Produto('Caneta', 8.59)
// console.log(p1)

// const p2 = new Produto('Geladeira', 2345.98)
// console.log(p2)
// console.log(p1.precoFinal().toFixed(2))
// console.log(p2.precoFinal().toFixed(2))

// //
// class Produto1 {
//     constructor(nome, preco, desc = 0.15) {
//         this.nome = nome
//         this.preco = preco
//         this.desc = desc
//     }
//     get precoFinal() {
//         return (this.preco * (1 - this.desc)).toFixed(2)
//     }
// }
// const p11 = new Produto1('Caneta', 8.59)
// console.log(p11)

// const p22 = new Produto1('Geladeira', 2345.98)
// console.log(p22)
// console.log(p11.precoFinal)
// console.log(p22.precoFinal)

// //
// class Produto11 {
//     constructor(nome, preco, desc = 0.15) {
//         this._nome = nome
//         this.preco = preco
//         this.desc = desc
//     }
//     get nome() {
//         return `Produto: ${this._nome}`
//     }
//     get precoFinal() {
//         return (this.preco * (1 - this.desc)).toFixed(2)
//     }
// }
// const p111 = new Produto11('Caneta', 8.59)
// console.log(p111.nome)

// const p222 = new Produto11('Geladeira', 2345.98)
// console.log(p222.nome)
// console.log(p111.precoFinal)
// console.log(p222.precoFinal)

//
// class Produto1111 {
//     constructor(nome, preco, desc = 0.15) {
//         this.nome = nome
//         this.preco = preco
//         this.desc = desc
//     }
//     get nome() {
//         return `Produto: ${this._nome}`
//     }
//     set nome(novoNome) {
//         this._nome = novoNome.toUpperCase()
//     }
//     get precoFinal() {
//         return (this.preco * (1 - this.desc)).toFixed(2)
//     }
// }
// const p1111 = new Produto1111('Caneta', 8.59)
// console.log(p1111.nome)

// const p2222 = new Produto1111('Geladeira', 2345.98)
// console.log(p2222.nome)
// console.log(p1111.precoFinal)
// console.log(p2222.precoFinal)

//
class Produto1111 {
    constructor(nome, preco, desc = 0.15) {
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }
    get nome() {
        return `Produto: ${this._nome}`
    }
    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }
    get preco() {
        return this._preco
    }
    set preco(novoPreco) {
        if (novoPreco >= 0) {
            this._preco = novoPreco
        }
    }
    get precoFinal() {
        return (this.preco * (1 - this.desc)).toFixed(2)
    }
}
const p1111 = new Produto1111('Caneta', 8.59)
console.log(p1111.nome)

const p2222 = new Produto1111('Geladeira', 2345.98)
p2222.preco = -20
console.log(p2222.nome)
console.log(p2222.preco)
console.log(p1111.precoFinal)
console.log(p2222.precoFinal)
console.log(typeof Produto1111)
