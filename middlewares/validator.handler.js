const { boomErrorHandler } = require("./error.handler");
const boom  = require("@hapi/boom");

function validatorHandler ( schema, property) {

  return (req, res, next)=>{
    const data = req[property];
    const {error} = schema.validate(data);
    if(error){
      next(boom.badRequest(error));
    }
    console.log("alojaaaaaaa1");
    next();
  }
}

module.exports = validatorHandler;
