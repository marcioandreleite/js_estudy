export function unirObjetos<T, U>(objt1: T, objt2: U): T & U {
    // return { ...objt1, ...objt2 }
    return Object.assign({}, objt1, objt2)
}

const objt1 = { chave1: 'valor1' }
const objt2 = { chave2: 'valor2' }
const uniao = unirObjetos(objt1, objt2)
console.log(uniao)