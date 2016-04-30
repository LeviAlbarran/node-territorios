var restful = require('node-rest-ful');
var mongoose = restful.mongoose;

var territoriosShema = new mongoose.Schema({
	id: String,
	nombre: String

});
module.exports = restful.model('territorios', territoriosSchema);
