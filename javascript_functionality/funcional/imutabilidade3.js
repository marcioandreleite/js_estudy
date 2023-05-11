const pessoa = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: {
        rua: 'feliz!!'
    }
}

//atribuição por referência(apontão pro mesmo lugar na memoria)
const novaPessoa = pessoa

pessoa.nome = 'João'
pessoa.cidade = 'Fortaleza'

novaPessoa.nome = 'Paulo'
novaPessoa.cidade = 'Manaus'

//passagem por referência (função impura)
function alterarPessoa(novaPessoa) {
    const novaPessoa1 = { ...pessoa }
    novaPessoa1.nome = 'Andre'
    novaPessoa1.cidade = 'Salvador'
    novaPessoa1.end.rua = 'ABC'
    return novaPessoa1
}
const novaPessoa2 = alterarPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa2)

//
let a = 3
let b = a //atribuição por valor (copia!)

a++
b--
console.log(a, b)