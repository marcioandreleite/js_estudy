export class Pessoa {
    static idadePradrao = 0
    static cpfPadrao = '000.000.000-00'

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string,
    ) { }

    //metodo static acesso somente ela classe não tem acesso pela const
    static falaOi(): void {
        console.log('OI')
    }

    static criarPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(nome, sobrenome, Pessoa.idadePradrao, Pessoa.cpfPadrao)
    }

    //metodo normal não pode pelo this somente pela class
    metodoNormal(): void {
        console.log(Pessoa.idadePradrao, Pessoa.idadePradrao)
    }
}

Pessoa.falaOi

const pessoa1 = new Pessoa('luis', 'miranda', 30, '000.000.000.00')
const pessoa2 = Pessoa.criarPessoa('maria', 'miranda')
console.log(pessoa1)
console.log(pessoa2)
pessoa1.metodoNormal()
console.log(Pessoa.cpfPadrao, Pessoa.idadePradrao)
