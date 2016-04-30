
// Dependecias
var express = require('express');
var router = express.Router();

// Modelos
var Direccion = require('../models/direccion');
var Territorios = require('../models/territorios');

// Routes
Direccion.methods(['get', 'put', 'post', 'delete']);
Direccion.register(router, '/direccion');

Territorios.methods(['get', 'put', 'post', 'delete']);
Territorios.register(router, '/territorios');


// Return router
module.exports = router;
