// const express = require('express'); //CommonJS
import express, { json } from 'express'; //EsModule

const app = express();

//Definiendo el primer endpoint (Ruta de entrada) 
app.get('/health', (req, res) => {
    res.send('Servidor de CheerClick esta funcionando!')

});

//Obtener todos los pagos
app.get('/pagos', (req, res) => {
    res.send('Listar todos los pagos registrados')
});

//Regitrar nuevos pagos
app.post('/pagos', (req, res) => {
    res.send('Registrar Pagos')
});

//Actualizar los pagos totalmente
app.put('/pagos' , (req, res) => {
    res.send('Actualizar todas las propiedes de los pagos')
})

//Actualizar los pagos parcialmente
app.patch('/pagos' , (req, res) => {
    res.send('Actualizar una o mas propiedades del los pagos')
})

//Eliminar pago
app.delete('/pagos' , (req, res) => {
    res.send('Eliminar un pago registrado')
})

//Iniciar servidor 
const port=3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});