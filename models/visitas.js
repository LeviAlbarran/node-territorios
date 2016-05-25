var restful = require('node-restful');
var mongoose = restful.mongoose;

var visitasSchema = new mongoose.Schema({
		fecha: String,
    	publicador: String,
    	direccion: String,
		publicacion: String,
		observaciones: String
});
module.exports = restful.model('visitas', visitasSchema);
