import {Schema, model} from "mongoose";

//Parte 1: Definir la estructura de datos de mi documento

const PagosSchema = new Schema({
    estado : {
        type: String,    //Tipo de dato
        required : true,    //Regla: Es OBLIGATORIO
        trim: true   //Modificador : 
    }
});

//Parte 2: Definir el modelo. Dicho modelo esta atado al nombre de un documento

const PagosModel = model();



export default PagosModel;