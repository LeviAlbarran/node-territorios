var restful = require('node-restful');
var mongoose = restful.mongoose;

var usuariosSchema = new mongoose.Schema({
	id: Number,
	nombre: String,
	privilegio: String,
	lat: Number,
	lng: Number,
	nivel: Number
});
module.exports = restful.model('usuarios', usuariosSchema);