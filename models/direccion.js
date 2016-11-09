
// Dependencias
var restful = require('node-restful');
var mongoose = restful.mongoose;
//var autoIncrement = require('mongoose-auto-increment');
//var connection = mongoose.createConnection("mongodb://levi:123@jello.modulusmongo.net:27017/iq6yPari");
//autoIncrement.initialize(connection);

// Schema

var CounterSchema = Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});
var counter = mongoose.model('counter', CounterSchema);

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

direccionSchema.pre('save', function(next) {
    var doc = this;
    counter.findByIdAndUpdate({_id: 'id'}, {$inc: { seq: 1} }, function(error, counter)   {
        if(error)
            return next(error);
        doc.testvalue = counter.seq;
        next();
    });
});

//direccionSchema.plugin(autoIncrement.plugin, { model: 'direccion', field: 'id' });
// Return model
module.exports = restful.model('direccion', direccionSchema);
