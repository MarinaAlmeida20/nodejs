const mysql = require('mysql'); // import mysql

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 1625,
    database: 'agenda-petshop'
})

module.exports = conexao; // to others can connect here