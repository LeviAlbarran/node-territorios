
// Dependecias
var express = require('express');
var router = express.Router();

// Modelos
var Direccion = require('../models/direccion');

// Routes
Direccion.methods(['get', 'put', 'post', 'delete']);
Direccion.register(router, '/direccion');

// Return router
module.exports = router;
