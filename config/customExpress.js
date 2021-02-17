const express = require('express'); // Call modules 'express' is a library(biblioteca)
const consign = require('consign'); // import consign

module.exports = () => { // function do something(configura o app)
    const app = express() // to execute the app

    consign() // include the controller inside the app
    .include('controllers')
    .into(app)

    return app;
};

