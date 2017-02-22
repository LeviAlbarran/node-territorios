
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

//Direcciones
  if (request.body.direccionesNuevas) {
   Direccion.find({}).limit(1).sort({id:-1}).exec(function(error, data){
     for (var i = 0; i < request.body.direccionesNuevas.length; i++) {  
        request.body.direccionesNuevas[i].id = data[0].id + 1;
        console.log(request.body.direccionesNuevas[i]);    
        Direccion.create(request.body.direccionesNuevas[i]);
     }
   });
  }

//Guardar Modificaciones
  if (request.body.direccionesModificadas) {
    for (var i = 0; i < request.body.direccionesModificadas.length; i++) {
      var direccion = request.body.direccionesModificadas[i];
        Direccion.update({_id: direccion._id}, direccion, function(err, numberAffected, rawResponse) {
             console.log(rawResponse);
        });   
     }
   }
// Eliminar 
  if (request.body.direccionesEliminadas) {
    for (var i = 0; i < request.body.direccionesEliminadas.length; i++) {
        console.log(request.body.direccionesEliminadas[i])      
         Direccion.remove({ _id: request.body.direccionesEliminadas[i]._id }, function(err, num) {
                
          });
     }
   }

//DireccionesTemporales
  if (request.body.direccionesTMPNuevas) {
     for (var i = 0; i < request.body.direccionesTMPNuevas.length; i++) {  
        request.body.direccionesTMPNuevas[i].id = data[0].id + 1;
        console.log(request.body.direccionesTMPNuevas[i]);    
        DireccionTMP.create(request.body.direccionesTMPNuevas[i]);
     }
  }

//Guardar Modificaciones
  if (request.body.direccionesTMPModificadas) {
    for (var i = 0; i < request.body.direccionesTMPModificadas.length; i++) {      
      DireccionTMP.update({_id: direccion._id}, direccion, function(err, numberAffected, rawResponse) {
             console.log(rawResponse);
        });   
     }
   }
// Eliminar 
  if (request.body.direccionesTMPEliminadas) {
    for (var i = 0; i < request.body.direccionesTMPEliminadas.length; i++) {      
      //  DireccionTMP.remove({ _id : request.body.direccionesTMPEliminadas[i]._id})
        DireccionTMP.remove({ _id: request.body.direccionesTMPEliminadas[i]._id }, function(err, num) {        
        })
     }
   }

    response.json(request.body);

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
