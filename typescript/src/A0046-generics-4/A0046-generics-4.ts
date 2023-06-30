type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K]

const obterchave: ObterChaveFn = (objeto, chave) => objeto[chave]

const animal = {
    cor: 'rosa',
    vacinas: ['vacina1', 'vacina2'],
    idade: 10
}

const vacinas = obterchave(animal, 'vacinas')
const cor = obterchave(animal, 'cor')

console.log(vacinas, cor, obterchave(animal, 'idade'))