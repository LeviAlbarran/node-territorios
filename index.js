
// Dependencias
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
//mongoose.connect('mongodb://localhost/node/territorios');
mongoose.connect('mongodb://levi:123@jello.modulusmongo.net:27017/iq6yPari');
// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
  //  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})


app.get('/', function(request, response) {
  response.render('pages/index');
});

// Routes
app.use('/api', require('./routes/api'));



// Start server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
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
