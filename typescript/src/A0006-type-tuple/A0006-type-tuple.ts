//tuple
const dadosCliente1: readonly [number, string] = [1, 'Luiz']
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda']
const dadosCliente3: [number, string, string?] = [1, 'Luiz']
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda']

// dadosCliente1[0] = 100
// dadosCliente1[1] = 'Carlos'

console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)

//readonly array
const array1: readonly string[] = ['Luis', 'Miranda']
const array2: ReadonlyArray<string> = ['Luis', 'Miranda']

console.log(array1)
console.log(array2)