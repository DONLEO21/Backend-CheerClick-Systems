import CompetenciaModel from "../models/competencia.model.js";

const dbCreateCompetencia = async (newCompetencia) => {
    return await CompetenciaModel.create(newCompetencia);
}


const dbGetCompetencia = async () => {
    return await CompetenciaModel.find();
}

const dbDeleteCompetencia = async (id) => {
    return await CompetenciaModel.findOneAndDelete({ _id: id});
    
}

export {
    dbGetCompetencia,
    dbCreateCompetencia,
    dbDeleteCompetencia
}