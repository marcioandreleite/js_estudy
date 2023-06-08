type TipoPessoa = {
    nome: string
}

type TipoSobrenome = {
    sobrenome: string
}

type TipoNomeCompleto = {
    nomeCompleto: () => string
}

//quando for usar um tipo não é extends e sim implements

export class Pessoa implements TipoPessoa, TipoSobrenome, TipoNomeCompleto {
    constructor(public nome: string, public sobrenome: string) {
    }

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome
    }
}

const pessoa = new Pessoa('Luiz', 'Miranda')
console.log(pessoa.nomeCompleto())