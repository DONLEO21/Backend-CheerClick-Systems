// const express = require('express'); //CommonJS
import express from 'express'; //EsModule

const app = express();

const port=3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});