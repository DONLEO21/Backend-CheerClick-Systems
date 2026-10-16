import MensualidadModel from "../models/mensualidades.model.js"

const dbCreateMensualidad = async ( newMensualidad ) => {
    return await MensualidadModel.create( newMensualidad );    //Registrar en la base de datos
}

const dbGetMensualidad = async () => {
    return await MensualidadModel.find({});  //Consultar todas las mensualidades registradas 
} 

export{
    dbCreateMensualidad,
    dbGetMensualidad
}