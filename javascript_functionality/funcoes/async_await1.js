function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}
// esperarPor(2000)
//     .then(() => console.log('Executando promise1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise3...'))

//
// async function executar() {
//     esperarPor(1500)
//     console.log('Asyinc/Await 1..')
//     esperarPor(1500)
//     console.log('Asyinc/Await 2..')
//     esperarPor(1500)
//     console.log('Asyinc/Await 3..')
// }
// executar()

//
function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}
function retornarValorRapido() {
    return 20
}

// async function executar() {
//     await esperarPor(1500)
//     console.log('Asyinc/Await 1..')
//     await esperarPor(1500)
//     console.log('Asyinc/Await 2..')
//     await esperarPor(1500)
//     console.log('Asyinc/Await 3..')
// }
// executar()

async function executar() {
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await1 ${valor}...`)
    await esperarPor(1500)
    console.log(`Async/Await2 ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`Async/Await3 ${valor + 2}...`)

    return valor + 3
}
// executar()
//     .then(console.log)

//
async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}
executarDeVerdade()