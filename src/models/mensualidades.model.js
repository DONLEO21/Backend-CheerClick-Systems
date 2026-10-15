import {Schema, model} from "mongoose";

//Definir la estructura de mi documento
const MensualidadSchema = new Schema(
    //Definir la estrcutura de datos
    { 
        fechaGeneracion: {
            type: Date,
            required: true 
        },
        fechaVencimiento: {
            type: Date,
            required: true,

        },
        valor: {
            type: Number,
            required: true,
            trim: true
        },
        numReferencia:{
            type: String,
            required: true,
            trim: true,
            minlenght: 5
            }
        },
  //Configuraciones de la estructura de datos 
{


});
//Definir el model a partir de la estructura del documento

const MensualidadModel = model('mensualidades', //Nombre de la coleccion donde se guardaran los documentos de las mensualidades
    MensualidadSchema
); //Schema que se guardara de la coleccion 

//Exportamos el modelo para que pueda ser usuado por los servicios 
export default MensualidadModel;