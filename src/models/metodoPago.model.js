import {Schema, model} from "mongoose";

const metodoPagoSchema = new Schema({
    nombre : {
        type: String,
        required: [true, 'El nombre del metodo de pago es obligatorio'],
        trim : true
    }
});

const metodoPagoModel = model('metodoPago', metodoPagoSchema);

export  default metodoPagoModel;