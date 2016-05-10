var restful = require('node-restful');
var mongoose = restful.mongoose;

var territoriosSchema = new mongoose.Schema({
	id: String,
	nombre: String

});
module.exports = restful.model('territorios', territoriosSchema);
