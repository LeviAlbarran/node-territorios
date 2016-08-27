var restful = require('node-restful');
var mongoose = restful.mongoose;

var usuariosSchema = new mongoose.Schema({
	id: Number,
	id_congregacion: Number,
	nombre: String,
	correo: String,
	clave: String,
	lat: Number,
	lng: Number,
	nivel: Number,
	activacion: Number
});
module.exports = restful.model('usuarios', usuariosSchema);