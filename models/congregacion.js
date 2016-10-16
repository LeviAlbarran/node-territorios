
// Dependencias
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var congregacionSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
    direccion: String,
    idioma: String,
    pais: String,
    lat: Number,
    lng: Number,
    estado: String,
    dataBase: String,
    conexion: String
});

// Return model
module.exports = restful.model('congregacion', congregacionSchema);
