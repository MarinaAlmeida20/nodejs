const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    }) // get date (pegar dados)

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id) // parseInt transform the id string to number

        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
            const atendimento = req.body;

            Atendimento.adiciona(atendimento, res);
            
        }); // Post

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimento/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
};