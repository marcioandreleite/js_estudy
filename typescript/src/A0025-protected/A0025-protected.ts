export class Empresa {
    public readonly nome: string //public não necessario
    protected readonly colaboradores: Colaborador[] = []
    private readonly cnpj: string

    constructor(nome: string, cnpj: string) {
        this.nome = nome
        this.cnpj = cnpj
    }

    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
    }

    mostraColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador)
        }
    }
}

export class Udemy extends Empresa {
    constructor() {
        super('Udemy', '000.000.000.-72')
    }
    popColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop()
        if (colaborador) return colaborador
        return null
    }
}

export class Colaborador {
    constructor(public readonly nome: string, public readonly sobrenome: string) { }
}

const empresa1 = new Udemy()
const colaborador1 = new Colaborador('Luis', 'Otavio')
const colaborador2 = new Colaborador('Maria', 'Miranda')
const colaborador3 = new Colaborador('João', 'Vieira')
empresa1.adicionaColaborador(colaborador1)
empresa1.adicionaColaborador(colaborador2)
empresa1.adicionaColaborador(colaborador3)
const colaboradorRemovido = empresa1.popColaborador()
console.log(colaboradorRemovido)
console.log(empresa1)
empresa1.mostraColaboradores()




