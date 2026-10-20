import { model, Schema } from "mongoose";

const planAsociadoSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        minlength: 5,
        required:true,
        trim: true
    },
    valor: {
        type: Number,
        required: true,
        trim: true,
        min: 0
    },
    estado: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        required: true,
        trim: true
    }

},{
    timestamps: true,
    versionKey: false
});

const PlanAsociadoModel = model('planAsociado', planAsociadoSchema)

export default PlanAsociadoModel;