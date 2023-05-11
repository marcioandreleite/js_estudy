function composicao(fn1, fn2) {
    return function (valor) {
        return fn2(fn1(valor))
    }
}

function composicao1(...fns) {
    return function (valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function gritar(texto) {
    return texto.toUpperCase()
}
function enfatizar(texto) {
    return `${texto}!!!`
}
function tornarLento(texto) {
    return texto.split('').join(' ')
}

const exagerado = composicao1(
    gritar,
    enfatizar,
    tornarLento,
)
const umPoucoExagerado = composicao1(
    gritar,
    enfatizar,
)
const resultado1 = exagerado('PARA')
const resultado2 = umPoucoExagerado('Cuidado com o Buraco')
console.log(resultado1)
console.log(resultado2)