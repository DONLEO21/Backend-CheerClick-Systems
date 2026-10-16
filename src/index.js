// const express = require('express'); //CommonJS
import express from 'express'; //EsModule

import conexion from './config/mongo.config.js';

import horariosRoute from './routes/horarios.routes.js';
import plantilla_horariosRoute from './routes/plantilla_horarios.routes.js'



const app = express();    // Instancia de Express

conexion();  // Ejecuta la conexion a la base de datos

// Habilita a la aplicacion para interpretar JSON
app.use( express.json())


// Definiendo endpoint (ruta de entrada)
app.get('/health', (req, res) => {
    res.send('Servidor de CheerClick Systems Funcionando')
});

// Enlazar todas las rutas de la aplicacion
app.use('/api/horarios', horariosRoute);
app.use('/api/plantilla_horario', plantilla_horariosRoute)



// Iniciar Servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});