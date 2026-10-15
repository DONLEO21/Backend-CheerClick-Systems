// const express = require('express'); //CommonJS
import express from 'express';//EsModule

import usuariosRoute from './routes/usuarios.routes.js'; //EsModule_
import epsRoute from './routes/eps.routes.js'

import conexion from './config/mongo.config.js' //Conexion a la base de datos


const app = express();     //Instancia de express

conexion();      //Ejecuta la conexion a la base de datos

//Habilita a la aplicacion para intepretar JSON
app.use(express.json());

//Definiendo el primer endpoint (Ruta de entrada) 
app.get('/health', (req, res) => {
    res.send('Servidor de CheerClick esta funcionando!')

});

//Enlazar todas las rutas de la aplicacion 
app.use( '/api/usuarios' , usuariosRoute );
app.use( '/api/eps' ,  epsRoute)

//Iniciar servidor 
const port=3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});