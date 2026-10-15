//Servicio se habla con la base de datos
//Estas funciones realizaran las consultas a la base de datos

import HorarioModel from "../models/horario.model.js"

//TODO: Conectar el Modelo de Horarios con la base de datos

const dbgetdHorario = () => {}

const dbinsertHorario = async (newHorario) => {
     return await HorarioModel.create(newHorario);
}

const dbupdateHorario = () => {}

const dbdeleteHorario = () => {}

export {
    dbinsertHorario,
    dbgetdHorario,
    dbupdateHorario,
    dbdeleteHorario
}