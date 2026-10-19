import { Schema, model} from "mongoose";

const contactoEmergenciaSchema =new Schema({
    parentesco: {
        type: String,
        unique: true,
        enum: ["Madre", "Padre", "Tutor", "Cónyuge", "Otro"],
        default: "Madre",
    },
    nombre: {
        type: String,            
        required: true,         
        trim: true
    },
    apellido: {
        type: String,           
        required: true,          
        trim: true
    },
    telefono: {
        type: String,           
        required: true,          
        trim: true
    },
    principal: {
        type: Boolean,
        required: true
    }

},{});

const contactoEModel = model( 'contactoE', contactoEmergenciaSchema );

export default contactoEModel;