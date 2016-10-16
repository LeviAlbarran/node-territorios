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
module.exports = restful.model('usuarios', usuariosSchema);