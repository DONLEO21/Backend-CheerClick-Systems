import MensualidadModel from "../models/mensualidades.model.js"

const dbCreateMensualidad = async ( newMensualidad ) => {
    return await MensualidadModel.create( newMensualidad );    //Registrar en la base de datos
}

const dbGetMensualidad = async () => {
    return await MensualidadModel.find();  //Consultar todas las mensualidades registradas 
} 

const dbDeleteMensualidad = async ( id ) => {
    // return await MensualidadModel.findByIdAndDelete( id )
    return await MensualidadModel.findOneAndDelete({ _id: id}) 
}

export{
    dbCreateMensualidad,
    dbGetMensualidad,
    dbDeleteMensualidad
}