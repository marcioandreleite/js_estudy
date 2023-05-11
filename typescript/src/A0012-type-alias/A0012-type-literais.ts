let x = 10 //desativar o eslint por causa do x
x = 0b1010
const y = 10
// let a = 100 as const
const a = 100

const pessoa = {
    nome: 'mario' as const,
    sobrenome: 'ferreira'
}

function escolhaACor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor
}
console.log(escolhaACor("Vermelho"))

//module module 
export default 1