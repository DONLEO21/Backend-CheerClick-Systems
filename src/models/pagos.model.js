import {Schema, model} from "mongoose";

//Parte 1: Definir la estructura de datos de mi documento

const PagosSchema = new Schema(
    //Definicion de los campos de documento
    {
    estado : {
        type: String,
        enum: ['Pagado', 'Vencido', 'Pendiente'],    //Tipo de dato
        required : true,    //Regla: Es OBLIGATORIO
        trim: true   //Modificador : 
    },
    valorTotal : {
        type: Number,
        required : true,
        trim : true 
    },
    fechaGenera : {
        type: Date,
        required : true
    },
    responsableRegis : {
        type: String,
        required : true,
        trim: true,
        maxlength: 50
    },
    fechaPago : {
        type: Date
    },
    observaciones: {
        type : String,
        trim: true,
        maxlength: 100
    },
    // metodoPago : {
    //     type: Schema.Types.ObjectId,
    //     ref: 'metodoPago',
    //     required: true
    // }
},
//
{
    timestamps: true
});

//Parte 2: Definir el modelo. Dicho modelo esta atado al nombre de un documento

const PagosModel = model('Pagos', PagosSchema);//Nombre de la coleccion  - Nombre del esquema que define la estructura de los documentos 



export default PagosModel;