
// Dependecias
var express = require('express');
var router = express.Router();

// Modelos
var Direccion = require('../models/direccion');
var Territorios = require('../models/territorios');
var Zonas = require('../models/zonas');
var Usuarios = require('../models/usuarios');

// Routes
Usuarios.methods(['get', 'put', 'post', 'delete']);
Usuarios.register(router, '/usuarios');

Direccion.methods(['get', 'put', 'post', 'delete']);
Direccion.register(router, '/direccion');

Territorios.methods(['get', 'put', 'post', 'delete']);
Territorios.register(router, '/territorios');

Zonas.methods(['get', 'put', 'post', 'delete']);
Zonas.register(router, '/zonas');


// Return router
module.exports = router;
