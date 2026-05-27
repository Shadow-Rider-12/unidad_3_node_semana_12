//Creamos una const, a la cual le asignamos una
//funcion anonima
//req= request
//res= response
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
module.exports = logger;
