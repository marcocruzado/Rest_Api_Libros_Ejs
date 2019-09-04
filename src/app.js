const express= require('express');
const app= express();
const path= require('path');
const morgan = require('morgan');

//cponfiguracion:utilizaremos ejs
app.set('port',5000);
app.set('views', path.join(__dirname,'views'));
app.set('views engine','ejs');


//middelwares:dunciones que se ejecutan anttes que se lleguean a la ruta
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));



//rutas

app.use(require('./routes/index'));


//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//error 404 heandler
app.use((req,res,next)=>{
    res.status(404).send("este es un error de conexion");
})



module.exports = app;