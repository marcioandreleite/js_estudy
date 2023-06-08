//interface Declaration Merge

interface Pessoai {
    nome: string
}

interface Pessoai {
    readonly sobrenome: string
}

interface Pessoai {
    readonly enderecos: readonly string[]
}

interface Pessoai {
    readonly idade?: number
}


const pessoai: Pessoai = {
    nome: 'luiz',
    sobrenome: 'miranda',
    enderecos: ['Av. Brasil'],
    idade: 30,
}

pessoai.enderecos.push('Rua Nova')
console.log(pessoai)