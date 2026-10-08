// const express = require('express'); //CommonJS
import express from 'express'; //EsModule

const app = express();

//Definiendo endpoint (ruta de entrada)
app.get('/health', (req, res) => {
    res.send('Servidor de CheerClick Systems Funcionando')
});

//Obtener todos los horarios
app.get('/horarios', (req, res) => {
    res.send('Listar todos los horarios')
});

//Crear un horarios
app.post('/horarios', (req, res) => {
    res.send('Registar horarios')
});
//Actualizar totalmente
app.put('/horarios', (req, res) => {
    res.send('Actualizar todas las propiedades de los horarios')
});

//Actualizar parcialmente
app.patch('/horarios' , (req,res) => {
    res.send('Actualizar una o mas propiedades de los horarios')
});

//Elimina un horario
app.delete('/horarios', (req, res) => {
    res.send('Eliminar un horario')
});

const port=3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});