const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Voce esta na rota de atendimentos esta realizando um GET')) // get date (pegar dados)

    app.post('/atendimentos', (req, res) => {
            const atendimento = req.body;

            Atendimento.adiciona(atendimento);
            
            res.send('Post Atendimento');
        }); // Post
};