function composicao(fn1, fn2) {
    return function (valor) {
        return fn2(fn1(valor))
    }
}

function composicao1(...fns) {
    return function (valor) {
        return fns.reduce(async (acc, fn) => {
            if (Promise.resolve(acc) === acc) {
                return fn(await acc)
            } else {
                return fn(acc)
            }
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
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(texto.split('').join(' '))
        }, 3000)
    })
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
exagerado('PARA')
    .then(console.log)
umPoucoExagerado('Cuidado com o Buraco')
    .then(console.log)
