let x
if (typeof x === 'undefined') x = 20
console.log(x * 2)

export function createPerson(firstName: string, lastName?: string): {
    firstName: String
    lastName?: String
} {
    return {
        firstName,
        lastName,
    }
}

export function squareOf(x: any) {
    if (typeof x === 'number') return x * x
    return null
}

const squareTwoNumber = squareOf(2)
const squareTwoString = squareOf('2')

if (squareTwoNumber === null) {
    console.log('conta Inválida')
} else {
    console.log(squareTwoNumber)
}