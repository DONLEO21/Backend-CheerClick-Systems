// const express = require('express'); //CommonJS
import express from 'express'; //EsModule

import horariosRoute from './routes/horarios.routes.js';

const app = express();

//Definiendo endpoint (ruta de entrada)
app.get('/health', (req, res) => {
    res.send('Servidor de CheerClick Systems Funcionando')
});

//Enlazar todas las rutas de la aplicacion
app.use('/api/horarios', horariosRoute);

//Imiciar Servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});