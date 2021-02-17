const express = require('express'); // Call modules 'express' is a library(biblioteca)
const consign = require('consign'); // import consign

const bodyParser = require('body-parser'); // função é justamente converter as requisições para algo que seja legível no JavaScript

module.exports = () => { // function do something(configura o app)
    const app = express() // to execute the app

    app.use(bodyParser.urlencoded({extended: true})) // biblioteca específica to appear the name:marina no browser
    app.use(bodyParser.json()) // To frontEnd send to backEnd information

    consign() // include the controller inside the app
        .include('controllers')
        .into(app)

    return app;
};

