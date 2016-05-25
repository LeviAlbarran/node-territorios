var restful = require('node-restful');
var mongoose = restful.mongoose;

var zonasSchema = new mongoose.Schema({
	id: String,
	nombre: String, 
	territorio: String
});
module.exports = restful.model('zonas', zonasSchema);