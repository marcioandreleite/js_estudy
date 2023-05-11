export function criaErro(): never {
    throw new Error('qualquer error')
}

criaErro()