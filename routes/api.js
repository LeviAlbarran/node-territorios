
// Dependecias
var express = require('express');
var router = express.Router();



// Modelos
var Direccion = require('../models/direccion');
var DireccionTMP = require('../models/direccion_tmp');
var Territorios = require('../models/territorios');
var Zonas = require('../models/zonas');
var Usuarios = require('../models/usuarios');
var Visitas = require('../models/visitas');
var Congregacion = require('../models/congregacion');

// Routes
Usuarios.methods(['get', 'put', 'post', 'delete']);
Usuarios.register(router, '/usuarios');

Direccion.methods(['get', 'put', 'post', 'delete']);
Direccion.register(router, '/direccion');

DireccionTMP.methods(['get', 'put', 'post', 'delete']);
DireccionTMP.register(router, '/direccion');


Territorios.methods(['get', 'put', 'post', 'delete']);
Territorios.register(router, '/territorios');

Zonas.methods(['get', 'put', 'post', 'delete']);
Zonas.register(router, '/zonas');

Visitas.methods(['get', 'put', 'post', 'delete']);
Visitas.register(router, '/visitas');

Congregacion.methods(['get', 'put', 'post', 'delete']);
Congregacion.register(router, '/congregacion');


// Return router
module.exports = router;
