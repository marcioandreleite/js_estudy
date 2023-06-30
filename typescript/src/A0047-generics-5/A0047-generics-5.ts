export class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) { }
}
// const pessoa1 = new Pessoa('luis', 30)
// const pessoa2 = new Pessoa(['luis'], 30)
// const pessoa3 = new Pessoa(['luis'], { idade: 30 })
// const pessoa4 = new Pessoa<string, number>('luis', 30)

export class Pilha<T> {
    private contador = 0
    private elementos: { [K: number]: T } = {}

    push(elemento: T): void {
        this.elementos[this.contador] = elemento
        this.contador++
    }

    pop(): T | void {
        if (this.estaVazia())
            return undefined

        this.contador--
        const elemento = this.elementos[this.contador]
        delete this.elementos[this.contador]
        return elemento
    }

    estaVazia(): boolean {
        return this.contador === 0
    }

    tamanho(): number {
        return this.contador
    }

    mostraPilha(): void {
        for (const chave in this.elementos) {
            console.log(this.elementos[chave])
        }
    }
}

const pilha = new Pilha<number | string>()
pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push('string')
const elementos = pilha.pop()
pilha.mostraPilha()

while (!pilha.estaVazia()) {
    console.log(pilha.pop())
}