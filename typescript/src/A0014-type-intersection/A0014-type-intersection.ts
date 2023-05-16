type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number }
type Pessoa = TemNome & TemSobrenome & TemIdade // and

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'D' | 'A'
type Imtersesao = AB & AC & AD

const pessoa: Pessoa = {
    nome: 'luis',
    sobrenome: 'miranda',
    idade: 30,
}

console.log(pessoa)

//module mode
export { pessoa }