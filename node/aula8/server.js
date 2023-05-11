const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
    <form action='/' method='POST'>
    Nome: <input type='text' name='name'>
    <button>Enviar</button>
    </form>
    `)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que vc me enviou ${req.body.name}`)
})

app.get('/testes/:idUsuario?/:parametro?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('Executando Port 3000')
})