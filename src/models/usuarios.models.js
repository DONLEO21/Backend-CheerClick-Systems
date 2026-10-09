import mongoose from "mongoose";

// Parte 1: Definir la estructura de datos de mi Documento
const usuarioSchema = new mongoose.Schema({
    name: {
        type: String,             //Tipo de dato
        required: true,           //Regla: Es Obligatorio
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

// Parte 2: Definir el modelo. Dicho modelo esta atado al nombre de documento
const usuarioModel = mongoose.model();

export default usuarioModel;