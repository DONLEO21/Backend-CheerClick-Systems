import Plantilla_horarioModel from "../models/plantilla_horario.model.js"

const dbCreatePlantilla_horario = async (newPlantilla_horario) => {
    return await Plantilla_horarioModel.create(newPlantilla_horario);  // Registrar en la base de datos
}

const dbGetPlantilla_horario = async () => {
   return await Plantilla_horarioModel.find();     // Consultar todas las plantillas de horarios
}

const dbDeletePlantilla_horario = async (id) => {
    //   return await Plantilla_horarioModel.findByIdAndDelete(id);

    return await Plantilla_horarioModel.findOneAndDelete({ _id: id});

}

export {
    dbCreatePlantilla_horario,
    dbGetPlantilla_horario,
    dbDeletePlantilla_horario
}