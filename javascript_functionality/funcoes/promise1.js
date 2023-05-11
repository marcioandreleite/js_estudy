let a = 1
console.log(a)

let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(3)
})
console.log(typeof p)
console.log(p)

p.then(function (valor) {
    console.log(valor)
})

//
let b = 1
console.log(b)

let h = new Promise(function (cumprirPromessa1) {
    cumprirPromessa1({
        x: 3,
        y: 4
    })
})
console.log(typeof h)
console.log(h)

h.then(function (valor1) {
    console.log(valor1.y)
})

//
let t = new Promise(function (cumprirPromessa2) {
    cumprirPromessa2(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
t.then(function (valor2) {
    console.log(valor2)
})

//
let g = new Promise(function (cumprirPromessa2) {
    cumprirPromessa2(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
g.then(valor3 => console.log(valor3))

//
let s = new Promise(function (cumprirPromessa4) {
    cumprirPromessa4(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
s
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

//
let m = new Promise(function (cumprirPromessa4) {
    cumprirPromessa4(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
function primeiroElemento(array) {
    return array[0]
}
function primeiraLetra(string) {
    return string[0]
}
const letraMinuscula = letra => letra.toLowerCase()
m
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

//
function primeiroElemento(array) {
    return array[0]
}
function primeiraLetra(string) {
    return string[0]
}
const letraMinuscula2 = letra => letra.toLowerCase()

new Promise(function (cumprirPromessa4) {
    cumprirPromessa4(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula2)
    .then(console.log)

//
const primeiroElemento4 = array => array[0]
const primeiraLetra1 = string => string[0]
const letraMinuscula3 = letra => letra.toLowerCase()

new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento4)
    .then(primeiraLetra1)
    .then(letraMinuscula3)
    .then(console.log)

//
const primeiroElemento5 = arrayOutString => arrayOutString[0]
const letraMinuscula4 = letra => letra.toLowerCase()

new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento5)
    .then(primeiroElemento5)
    .then(letraMinuscula4)
    .then(console.log)    
