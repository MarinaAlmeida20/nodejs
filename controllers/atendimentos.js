module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Voce esta na rota de atendimentos esta realizando um GET')) // get date (pegar dados)

    app.post('/atendimentos', (req, res) => {

            console.log(req.body)
            res.send('Voce esta na rota de atendimento e esta realizando um POST')
        }) // Post
}