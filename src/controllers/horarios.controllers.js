//Controlador define quien hace una accion especifica

import { dbinsertHorario } from "../services/horarios.services.js";

const getHorario = (req, res) => {
    res.send('Obtiene todos los horarios')
}

const createHorario = async (req, res) => {
    const horario = req.body;

    const newHorario= await dbinsertHorario(horario);

    res.json({ msg : 'Crear un horario', horario: newHorario})
}

const updateHorarioPut= (req, res) => {
    res.json({ msg : 'Actualizar todas las propiedades de los horarios'})
}
const updateHorarioPatch = (req, res) => {
    res.json({ msg : 'Actualizar uno o mas propiedades de los horarios'})
}

const deleteHorario =  (req, res) => {
    res.json({ msg : 'Eliminar un horario'})
}
export {
    getHorario,
    createHorario,
    updateHorarioPut,
    updateHorarioPatch,
    deleteHorario
}