// const express = require('express'); //CommonJS
import express from 'express';
import usuariosRouter from './routes/usuarios.routes.js'; //EsModule
import { getUsuario, createUsuario, updateUsuario, updateUsuarioP, deleteUsuario } from './controllers/usuarios.controllers.js';
import router from './routes/usuarios.routes.js';

const app = express();

//Definiendo el primer endpoint (Ruta de entrada) 
app.get('/health', (req, res) => {
    res.send('Servidor de CheerClick esta funcionando!')

});

router.post('/', getUsuario)
router.post('/',  createUsuario)
router.post('/',  updateUsuario)
router.post('/',  updateUsuarioP)
router.post('/',  deleteUsuario)

//Enlazar todas las rutas de la aplicacion 
app.use( '/api/usuarios' , usuariosRouter );

//Iniciar servidor 
const port=3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});