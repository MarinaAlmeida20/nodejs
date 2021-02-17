const customExpress = require('./config/customExpress'); // export the module.exports ( function)

const conexao = require('./infraestrutura/conexao'); // export the module conexao

const Tabelas = require('./infraestrutura/tabelas');

conexao.connect(erro => { // try to connect
    if(erro) {
        console.log(erro)
    } else {
        console.log('Conectado com sucesso')

        Tabelas.init(conexao);
        const app = customExpress(); // running the function

        app.listen(3000, () => console.log('Server running in the door 3000'));
        
    } 
});


// when someone go to door 3000, will happening something.

// app.get('/', (req, res) => res.send('Server running, everything ok'))
// when it goes to '/', I want it does something(req(requisition), res(respond))

