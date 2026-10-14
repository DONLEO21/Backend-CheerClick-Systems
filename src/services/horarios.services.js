//Servicio se habla con la base de datos
//Estas funciones realizaran las consultas a la base de datos

import HorarioModel from "../models/horario.model.js"

//TODO: Conectar el Modelo de Horarios con la base de datos

const dbinsertHorario = async (newHorario) => {
     return await HorarioModel.create(newHorario);
}

const dbcreardHorario = () => {}

const dbupdateHorario = () => {}

const dbdeleteHorario = () => {}

export {
    dbinsertHorario,
    dbcreardHorario,
    dbupdateHorario,
    dbdeleteHorario
}