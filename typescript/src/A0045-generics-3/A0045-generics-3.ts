interface PessoaProtocolo<T = string, U = number> {
    nome: T
    sobrenome: T
    idade: U
}

//difernça entre o interface eo o type é o sinal de igual
type PessoaProtocolo1<T = string, U = number> = {
    nome: T
    sobrenome: T
    idade: U
}


const aluno: PessoaProtocolo<string, number> = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
}

const aluno1: PessoaProtocolo1<number, number> = {
    nome: 123,
    sobrenome: 456,
    idade: 30,
}

const aluno2: PessoaProtocolo1 = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
}

console.log(aluno, aluno1, aluno2)