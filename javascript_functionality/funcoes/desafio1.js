//somar(3)(4)(5)

//fn -> 3 * 7
//fn -> 3 + 7
//fn -> 3 - 7
//calcular(3)(7)(fn)

function somar(a, b, c) {
    return a + b + c
}
const resultado = somar(3, 4, 5)
console.log(resultado);

function calcular() {
    return function (a, b) {
        return a + b
    }
}
const cal = calcular()
console.log(cal(3, 7))

//
function somar1(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
const somarTotal = somar1(3)(4)
console.log(somarTotal(5));
console.log(somar1(3)(4)(5));

function calcular1(x) {
    return function (y) {
        return function (fn) {
            return fn(x, y)
        }
    }
}
function subtrair(a, b) {
    return a - b
}
function multiplicar(a, b) {
    return a * b
}
const res = calcular1(10)(5)(subtrair)
console.log(res);

const res1 = calcular1(10)(5)(multiplicar)
console.log(res1);