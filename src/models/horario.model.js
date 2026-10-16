import {Schema, model} from "mongoose";

// Parte 1: Definir la estructura de datos de mi Documento
const HorarioSchema = new Schema({
    fecha: {
        type: Date,
        required: true
    },
    enfoque: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100 
    },
    lugar: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100 
    },
    notasIndicaciones: {
        type: String,
        required: true,
        trim: true,
        maxlength: 250
    },
    estado: {
        type: String, 
        enum: ['Activo', 'Inactivo'],
        required: true,
        default: 'Activo'
    },
    tipo: {
        type: String, 
        enum: ['Parther', 'Gimnasia', 'Coreografía'],
        required: true
    },
    franjaInicio: {
        type: String,
        required: true,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/
    },
    franjaFin: {
        type: String,
        required: true,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/,
        validate: {
            validator: function (valor) {
                return valor > this.franjaInicio;
            },
            message: 'La hora fin debe ser posterior a la hora inicio'
        }
    },
    // Relación con el modelo Nivel usando su archivo correspondiente
    // nivel: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Nivel', 
    //     required: true
    // }
},
{
    timestamps: true,                 // Agrega los campos CreateAt, updateAt automaticamente (los actualiza automaticamente)
    versionKey: false                // Elimina la propiedad de versionamiento __v del Schema
});

//Parte 2: Definir el modelo. Dicho modelo esta atado al nombre del documento
const HorarioModel= model(
    'Horario',         // Nombre de la coleccion (pluraliza automaticamente)
    HorarioSchema      // Nombre del esquema que define la estructura de los documentos
);


export default HorarioModel;

