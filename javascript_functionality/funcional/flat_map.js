const letras = [
    'O', 'l', 'á',
    ' ',
    'm', 'u', 'n', 'd', 'o',
    '!', '!', '!'
]
const resultado = letras
    .map(l => l.toUpperCase())
    .reduce((a, b) => a + b)
console.log(resultado)

//
const letras1 = [
    ['O', 'l', 'á'],
    [' '],
    ['m', 'u', 'n', 'd', 'o'],
    ['!', '!', '!']
]
console.log(letras1.flat())

//
const letras2 = [
    ['O', ['l'], 'á'],
    [' '],
    ['m', ['u', 'n'], 'd', 'o'],
    ['!', '!', '!']
]
console.log(letras2.flat().flat())

//
const letras3 = letras2.flat(Infinity)
console.log(letras3)

//
const letras11 = letras2.flat(Infinity)
const resultado1 = letras
    .flatMap(l => [l, ','])
    .reduce((a, b) => a + b)
console.log(resultado1)