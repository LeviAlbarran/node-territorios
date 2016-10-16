var jwt = require('jwt-simple');  
var moment = require('moment');  
var config = require('./config');

exports.createToken = function(user) {  
  var payload = {
   // sub: user._id,
   	sub: user._id,
   	usr: user.nombre,
   	eml: user.correo,
    nvl: user.nivel,
   	cong: user.id_congregacion,
    conx: user.conexion,
   	per: user.permisos,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};