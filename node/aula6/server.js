const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <form action='/' method='POST'>
    Nome: <input type='text' name='name'>
    <button>enviar</button>
    </form>
    `)
})

app.get('/contato', (req, res) => {
    res.send('obrigado por entre em contato')
})

app.post('/', (req, res) => {
    res.send('obrigado por entre em contato')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('Executando Port 3000')
})