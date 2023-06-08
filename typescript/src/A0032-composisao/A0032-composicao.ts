export class Carro {
    private readonly motor = new Motor()

    ligar(): void {
        this.motor.ligar()
    }

    acelerar(): void {
        this.motor.acelerar()
    }

    parar(): void {
        this.motor.parar()
    }

    desligar(): void {
        this.motor.desligar()
    }
}

export class Motor {
    ligar(): void {
        console.log('motor esta ligado...')
    }

    acelerar(): void {
        console.log('acelerando...')
    }

    parar(): void {
        console.log('parando...')
    }

    desligar(): void {
        console.log('motor esta desligado...')
    }
}

const carro = new Carro()
carro.ligar()
carro.acelerar()
carro.parar()
carro.desligar()


