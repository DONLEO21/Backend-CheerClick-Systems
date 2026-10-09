// const express = require('express'); //CommonJS
import express, { json } from 'express';
import pagosRouter from './routes/pagos.routes.js'; //EsModule

const app = express();

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