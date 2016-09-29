// middleware.js
var jwt = require('jwt-simple');  
var moment = require('moment');  
var config = require('./config');
var mongoose = require('mongoose');


exports.ensureAuthenticated = function(req, res, next) {  
  console.log(req.headers.authorization)
  if(!req.headers.authorization) {
    return res
      .status(403)
      .send({message: "Tu petición no tiene cabecera de autorización"});
  }

  var token = req.headers.authorization.split(" ")[1];
  //var token = req.headers.authorization;
  console.log(token);
  var payload = jwt.decode(token, config.TOKEN_SECRET);

  if(payload.exp <= moment().unix()) {
     return res
         .status(401)
        .send({message: "El token ha expirado"});
  }

 // var db1 = mongoose.createConnection('mongodb://levi:123@jello.modulusmongo.net:27017/iq6yPari');
//console.log(db1);
  //var congregacion = req.headers.authorization.split(" ")[1];
  //congregacion = jwt.decode(congregacion, config.TOKEN_SECRET);
  //console.log(congregacion);

  req.user = payload.sub;
  next();
}
