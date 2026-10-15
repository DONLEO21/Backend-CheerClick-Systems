import EpsModel from "../models/eps.model.js"

const dbCreateEps = async (newEps) => {
    return await EpsModel.create(newEps); //Resgistra en la bd
}

export { dbCreateEps}