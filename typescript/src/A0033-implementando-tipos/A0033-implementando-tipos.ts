interface TipoNome {
    nome: string
}

interface TipoSobrenome {
    sobrenome: string
}

interface TipoNomeCompleto {
    nomeCompleto(): string
}

// type Numero = number | string
type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto { }

//quando for usar um tipo não é extends e sim implements

export class Pessoa implements TipoPessoa2 {
    constructor(public nome: string, public sobrenome: string) {
    }

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome
    }
}

const pessoaObj: TipoPessoa2 = {
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    },
    nome: 'luis',
    sobrenome: 'agora tá ok',
}

const pessoa = new Pessoa('Luiz', 'Miranda')
console.log(pessoa.nomeCompleto())
console.log(pessoaObj.nomeCompleto())