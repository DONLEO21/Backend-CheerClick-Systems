import Plantilla_horarioModel from "../models/plantilla_horario.model.js"

const dbCreatePlantilla_horario = async (newPlantilla_horario) => {
    return await Plantilla_horarioModel.create(newPlantilla_horario);  // Registrar en la base de datos
}

export {
    dbCreatePlantilla_horario
}