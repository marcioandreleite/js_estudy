exports.paginaInicial = (req, res) => {
    res.send(`
    <form action='/' method='POST'>
    Nome: <input type='text' name='name'>
    <button>Enviar</button>
    </form>
    `)
}

exports.trataPost = (req, res) => {
    res.send('Hei sou sua nova rota de post')
}