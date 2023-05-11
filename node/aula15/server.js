require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const route = require('./routes')
const path = require('path')
// const middleware = require('./src/middlewares/middleware')
const { middlewareGlobal } = require('./src/middlewares/middleware')
const { Store } = require('express-session')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'fidhvwwuyhfầaff~~gddfdd',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions)
app.use(flash)

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//nossos próprios middleware
app.use(middlewareGlobal)
app.use(route)
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000')
        console.log('Executando Port 3000')
    })
})
