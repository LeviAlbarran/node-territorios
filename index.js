
// Dependencias
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');  
var authCtrl = require('./controllers/auth');  
var middleware = require('./controllers/middleware');
var autoIncrement = require('mongoose-auto-increment');
var Direccion = require('./models/direccion');


// MongoDB
mongoose.connect('mongodb://levi:123@jello.modulusmongo.net:27017/iq6yPari');
//mongoose.connect('mongodb://arubaspanish:123@jello.modulusmongo.net:27017/moSyv6ym');
// Express
var app = express();  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended: true}));  
app.use(cors()); 
app.set('port', (process.env.PORT || 5000));
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
  //  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

//autoIncrement.initialize(connection);

//app.set('port', 5000);
//app.set('port', (process.env.PORT || 5000));

require('./models/usuarios');

// Iniciamos las rutas de nuestro servidor/API
var router = express.Router();

// Rutas de autenticación y login
app.post('/auth/signup', authCtrl.emailSignup);
app.post('/auth/login', authCtrl.emailLogin);


console.log('esto' + JSON.stringify(middleware.ensureAuthenticated));

// Routes
app.use('/api', middleware.ensureAuthenticated,  require('./routes/api'));



// Start server
app.listen(app.get('port'), function() {
  console.log('Node appk is running on port', app.get('port'));
});

app.get('/api/ultimaDireccion', function(request, response) {
	 Direccion.find({}).limit(1).sort({id:-1}).exec(function(error, data){
	 	response.json(data);
	 });	 
});

app.get('/api/listDirecciones', function(request, response) {
   Direccion.find({}, { id: 1, _id: 1, nombre: 1, id_a: 1, territorio: 1, lat: 1, lng: 1}).exec(function(error, data){
     response.json(data);
   });   
});

app.post('/api/sincronizacion', function(request, response) {
  console.log(request); 
//Salvar Nuevos
  if (request.direccionesNuevas) {
   Direccion.find({}).limit(1).sort({id:-1}).exec(function(error, data){
     for (var i = 0; i < request.direccionesNuevas.length; i++) {      
        request.direccionesNuevas[i].id = data[0].id + 1;
        Direccion.insertOne(request.direccionesNuevas[i]);
     }
   });
  }

//Guardar Modificaciones
  if (request.direccionesModificadas) {
    for (var i = 0; i < request.direccionesModificadas.length; i++) {      
        Direccion.update({ _id:request.direccionesModificadas[i]._id}, request.direccionesModificadas[i]);
     }
   }
// Eliminar 
  if (request.direccionesEliminadas) {
    for (var i = 0; i < request.direccionesEliminadas.length; i++) {      
        Direccion.deleteOne({ _id : request.direccionesEliminadas})
     }
   }

     response.json('sincronizado');

});

/* var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


*/
