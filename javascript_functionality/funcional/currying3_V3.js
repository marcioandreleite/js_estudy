function textoComTamanhoEntre(min) {
    return function (max) {
        return function (erro) {
            return function (texto) {
                //lazy evaluation
                const tamanho = (texto || '').trim().length
                if (tamanho < min || tamanho > max) {
                    throw erro
                }
            }
        }
    }
}
// const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }
// textoComTamanhoEntre(4)(255)('Nome inválido!')(p1.nome)

//
function aplicarValidacao(fn) {
    return function (valor) {
        //lazy evaluation
        try {
            fn(valor)
        } catch (error) {
            return { error: error }
        }

    }
}

const forcaTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcaNomeProdutoValido = forcaTamanhoPadrao('Nome produto inválido!')
const validaNomeDoProduto = aplicarValidacao(forcaNomeProdutoValido)

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }
const p2 = { nome: 'AB', preco: 14.99, desc: 0.25 }
console.log(validaNomeDoProduto(p1.nome))
console.log(validaNomeDoProduto(p2.nome))
