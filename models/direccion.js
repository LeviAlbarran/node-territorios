
// Dependencias
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var direccionSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
    genero: String,
    direccion: String,
    condicion: String,
    comentarios: String,
    publicador: String,
    lat: Number,
    lng: Number,
    estado: String,
    zona:String,
    fecha: String,
    territorio: String,
    edificacion: String,
    foto: String,
    visitas:{

    	fecha: String,
    	publicador: String,
		publicacion: String,
		observaciones: String


    }


});

// Return model
module.exports = restful.model('direccion', direccionSchema);
