//any não tem um type especifico
//ultilize o any em último caso
function showMessage(msg: any) {
    return msg
}
console.log(showMessage([1, 2, 3]))
console.log(showMessage('Olá'))
console.log(showMessage(1))