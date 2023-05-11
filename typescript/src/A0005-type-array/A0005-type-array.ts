// 2 maneiras de fazer o array
// array <T> - T[]

export function multiplicaAgrs(...agrs: Array<number>): number {
    return agrs.reduce((acc, valor) => acc * valor, 1)
}

export function conctenaStrings(...agrs: string[]): string {
    return agrs.reduce((acc, valor) => acc + valor)
}

export function toUpperCase(...agrs: string[]): string[] {
    return agrs.map((valor) => valor.toUpperCase())
}

const result = multiplicaAgrs(1, 2, 3)
const conctenação = conctenaStrings('a', 'b', 'c')
const upcase = toUpperCase('a', 'b', 'c')

console.log(result)
console.log(conctenação)
console.log(upcase)