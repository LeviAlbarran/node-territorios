
// Dependencias
var restful = require('node-restful');
var mongoose = restful.mongoose;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://levi:123@jello.modulusmongo.net:27017/iq6yPari");
autoIncrement.initialize(connection);

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

direccionSchema.plugin(autoIncrement.plugin, { model: 'direccion', field: 'id', startAt: 69 });
// Return model
module.exports = restful.model('direccion', direccionSchema);
