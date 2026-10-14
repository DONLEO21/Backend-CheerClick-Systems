import {Schema, model} from "mongoose";

const metodoPagoSchema = new Schema({
    nombre : {
        type: String,
        required: true,
        trim : true
    }
});

const metodoPagoModel = model('metodoPago', metodoPagoSchema);

export  default metodoPagoModel;