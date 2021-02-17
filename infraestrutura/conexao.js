const mysql = require('mysql'); // import mysql

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'novasenha',
    database: 'agenda-petshop'
})

module.exports = conexao; // to others can connect here