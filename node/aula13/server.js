const express = require('express')
const app = express()
const route = require('./routes')
const path = require('path')
// const middleware = require('./src/middlewares/middleware')
const { middlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//nossos próprios middleware
app.use(middlewareGlobal)
app.use(route)

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('Executando Port 3000')
})