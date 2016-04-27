
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

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
  //  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

// Routes
app.use('/api', require('./routes/api'));

app.get('/', function (req, res) {
  res.send('Activado!');
});

// Start server
app.listen(5000);
console.log('API is running on port 5000');
