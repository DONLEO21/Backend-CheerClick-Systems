import express from 'express';

import rendimientoRoute from './routes/rendimiento.routes.js';


import conexion from './config/mongo.config.js' 

const port= process.env.PORT || 3001;

const app = express();    

conexion();  

app.use(express.json());

//Definiendo endpoint (ruta de entrada)
app.get('/health', (req, res) => {
    res.status(200).json({msg : 'Servidor de CheerClick esta funcionando!'})

});

// Enlazar todas las rutas de la aplicacion
app.use( '/api/rendimiento' , rendimientoRoute );

// Iniciar Servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});