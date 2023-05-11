//arrow function
const felizNatal = () => console.log('Feliz Natal!!!');
felizNatal()

const saudacao = (nome) => 'Fala ' + nome + ', Blz !?!'
console.log(saudacao('Maria'));

const saudacao1 = nome => 'Fala ' + nome + ', Blz !?!'
console.log(saudacao1('Maria'));

const saudacao2 = nome => `Fala ${nome}, Blz !?!`
console.log(saudacao2('Maria'));

const saudacao3 = nome => `Fala ${2 * 2}, Blz !?!`
console.log(saudacao3('Maria'));

//
const somar = numeros => {
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}
console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const somar1 = (...numeros) => {
    console.log(Array.isArray(numeros));
    console.log(typeof numeros);
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}
console.log(somar1(1, 2, 3))
console.log(somar1(1, 2, 3, 4, 5, 6))
console.log(somar1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

//
const potencia = (base) => {
    return function (exp) {
        return Math.pow(base, exp)
    }
}
console.log(potencia(2)(8));

const potencia1 = (base) => {
    return (exp) => {
        return Math.pow(base, exp)
    }
}
console.log(potencia1(2)(8));

const potencia2 = base => {
    return exp => {
        return Math.pow(base, exp)
    }
}
console.log(potencia2(2)(8));

const potencia3 = base => exp => { return Math.pow(base, exp) }
console.log(potencia3(2)(8));

const potencia4 = base => exp => Math.pow(base, exp)
console.log(potencia4(2)(8));