const readline = require('readline')

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}
//observer
function namorada() {
    console.log('N: Apagar as luzes')
    console.log('N: Pedir silêncio')
    console.log('N: Surpresa!!!')
}
//observer
function sindico(evento) {
    console.log('S: Monitorando barulho')
    console.log(`S: evento -> ${evento.resp}`)
    console.log(`S: evento -> ${evento.data}`)
}
//subject
async function porteiro(interessados) {
    while (true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q)')
        if (resp.toLowerCase() === 's') {
            //os observadores são notificados
            (interessados || []).forEach(obs => obs({ resp, data: Date.now() }))
        } else if (resp.toLowerCase() === 'q') {
            break
        }
    }
}
/*
chamada da função -> registra os dois observadores!
os observadores são: namorada e sindico
o subject é o porteiro
*/
porteiro([namorada, sindico])  
