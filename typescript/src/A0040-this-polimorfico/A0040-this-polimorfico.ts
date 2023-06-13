export class Calculadora {
    constructor(public numero: number) { }

    add(n: number): this {
        this.numero += n
        return this
    }

    sub(n: number): this {
        this.numero -= n
        return this
    }

    mul(n: number): this {
        this.numero *= n
        return this
    }

    div(n: number): this {
        this.numero /= n
        return this
    }
}
export class SubCalculadora extends Calculadora {
    pow(n: number): this {
        this.numero **= n
        return this
    }
}

const calculadora1 = new Calculadora(10)
calculadora1.add(5).mul(2).div(2).sub(5)
console.log(calculadora1)

const calculadora2 = new SubCalculadora(10)
calculadora2.add(5).mul(2).div(2).sub(5).pow(2)
console.log(calculadora2)

//Bilder GoF
export class RequestBilder {
    private method: 'get' | 'post' | null = null
    private url: string | null = null

    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }

    setUrl(method: string): this {
        this.url = method
        return this
    }

    send(): void {
        console.log(`enviando dados via ${this.method} para ${this.url}`)
    }
}
const request = new RequestBilder() //Bilder
request.setUrl('https://www.google.com').setMethod('post').send()