// eslint-disable

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'luis'
let idade: number = 30
let adulto: boolean = true
let simbulo: symbol = Symbol('qualquer-symbol')
// let big: bigint = 10n

//array
let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeNumeros2: number[] = [1, 2, 3]
let arrayDeStrings: Array<string> = ['a', 'b', 'c']
let arrayDeStrings2: string[] = ['a', 'b', 'c']

//objetos
// ? significa que o atributo e opcional
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: 'Luiz',
    idade: 30
}

//funções
function soma(x: number, y: number): number {
    return x + y
}
const soma2: (x: number, y: number) => number = (x, y) => x + y        
