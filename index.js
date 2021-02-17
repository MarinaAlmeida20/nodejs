const express = require('express'); // Call modules 'express' is a library(biblioteca)

const app = express() // to execute the app

app.listen(3000, () => console.log('Server running in the door 3000'));
// when someone go to door 3000, will happening something.

// app.get('/', (req, res) => res.send('Server running, everything ok'))
// when it goes to '/', I want it does something(req(requisition), res(respond))

app.get('/atendimentos', (req, res) => res.send('Voce esta na rota de atendimentos'))