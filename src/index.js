// const express = require('express'); //CommonJS
import express from 'express';

import conexion from './config/mongo.config.js'; //Importar la connexion a la base de datos
import pagosRouter from './routes/pagos.routes.js'; //EsModule

const app = express(); //Instacia de express
conexion(); // Ejecuta la conexion de la base de datos 

app.use(express.json()) //Habilita a la aplicacion para interpretar JSON


//Definiendo el primer endpoint (Ruta de entrada) 
app.get('/health', (req, res) => {
    res.send('Servidor de CheerClick esta funcionando!')

});

//Enlazar todas las rutas de la aplicacion 
app.use( '/api/pagos' , pagosRouter );

//Iniciar servidor 
const port=3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});