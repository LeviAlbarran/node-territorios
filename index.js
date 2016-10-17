
// Dependencias
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');  
var authCtrl = require('./controllers/auth');  
var middleware = require('./controllers/middleware');

// MongoDB
mongoose.connect('mongodb://levi:123@jello.modulusmongo.net:27017/iq6yPari');
//mongoose.connect('mongodb://arubaspanish:123@jello.modulusmongo.net:27017/moSyv6ym');
// Express
var app = express();  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended: true}));  
app.use(cors());  
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
  //  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.set('port', 5000);
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
