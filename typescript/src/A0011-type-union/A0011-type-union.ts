function addOrContact(a: number | string | boolean, b: number | string | boolean): number | string | boolean {
    if (typeof a === 'number' && typeof b === 'number') return a + b
    return `${a}${b}`
}
console.log(addOrContact(10, 20))
console.log(addOrContact('10', '20'))
console.log(addOrContact(10, '20'))
console.log(addOrContact('10', 20))
console.log(addOrContact(true, true))