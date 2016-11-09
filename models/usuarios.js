var restful = require('node-restful');
var mongoose = restful.mongoose;

autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://levi:123@jello.modulusmongo.net:27017/iq6yPari");
autoIncrement.initialize(connection);

var usuariosSchema = new mongoose.Schema({
	id: Number,
	id_congregacion: Number,
	nombre: String,
	correo: String,
	clave: String,
	lat: Number,
	lng: Number,
	nivel: Number,
	activacion: Boolean,
	permisos: {
		territorios: [],
		sistema: {
			verificacion: {
				visualizar: Boolean,
				crear: Boolean,
				modificar: Boolean,
				eliminar: Boolean
			},
			territorio: {
				crear: Boolean,
				modificar: Boolean,
				eliminar: Boolean
			},
			zonas: {
				crear: Boolean,
				modificar: Boolean,
				eliminar: Boolean
			},
			direcciones: {
				crear: Boolean,
				modificar: Boolean,
				eliminar: Boolean
			}

		}
	} 
});
usuariosSchema.plugin(autoIncrement.plugin, { model: 'usuarios', field: 'id' });
module.exports = restful.model('usuarios', usuariosSchema);