// const express = require('express'); //CommonJS
import express from 'express';//EsModule
import usuariosRouter from './routes/usuarios.routes.js'; //EsModule_
import { getUsuario, createUsuario, updateUsuario, updateUsuarioP, deleteUsuario } from './controllers/usuarios.controllers.js';
import conexion from './config/mongo.config.js' //Conexion a la base de datos
import router  from './routes/usuarios.routes.js';


const app = express();     //Instancia de express

conexion();      //Ejecuta la conexion a la base de datos

//Habilita a la aplicacion para intepretar JSON
app.use(express.json());

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