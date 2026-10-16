import EpsModel from "../models/eps.model.js"

const dbCreateEps = async (newEps) => {
    return await EpsModel.create(newEps); //Resgistra en la bd
}

const dbGetEps = async () => {
    return await EpsModel.find(); //Consultar todas las eps registradas
}

const dbDeleteEps = async (id) => {
    return await EpsModel.findOneAndDelete({ _id: id})
}


export { 
    dbCreateEps,
    dbGetEps,
    dbDeleteEps
}