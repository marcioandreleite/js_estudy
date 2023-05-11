function produto(nome, preco, desc = 0.15) {
    this.nome = nome
    this.preco = preco
    this.desc = desc

    // this.precoFinal = () => this.preco * (1 - this.desc)
    this.precoFinal = function () {
        return this.preco * (1 - this.desc)
    }
}
const p1 = new produto('Caneta', 8.59)
console.log(p1)

const p2 = new produto('Geladeira', 2345.98)
console.log(p2)
console.log(p1.precoFinal().toFixed(2))
console.log(p2.precoFinal().toFixed(2))
