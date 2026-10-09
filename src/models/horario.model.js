import {Schema, model} from "mongoose";

// Parte 1: Definir la estructura de datos de mi Documento
const HorarioSchema = new Schema({
    fecha: {
        type: Date,
        required: true
    },
    enfoque: {
        type: String,
        required: true 
    },
    lugar: {
        type: String,
        required: true
    },
    notasIndicaciones: {
        type: String,
        required: true
    },
    estado: {
        enum: ['Activo', 'Inactivo'],
        required: true
    }
});

//Parte 2: Definir el modelo. Dicho modelo esta atado al nombre del documento
const HorarioModel= model();


export default HorarioModel;









