//Controlador define quien hace una accion especifica

import { dbinsertHorario } from "../services/horarios.services.js";

const getHorario = (req, res) => {
    res.send('Obtiene todos los horarios')
}

const createHorario = async (req, res) => {
    try {
    // Obtenemos el horario desde el cuerpo de la peticion
    const horario = req.body;
   
    // Conecta con el horario servicio para crear un horario en la base de datos
    const newHorario= await dbinsertHorario(horario); // Llega como una Promesa 

    // Respuesta del horario
    res.json({ msg : 'Crear un horario', horario: newHorario})
        
    } catch (error) {
        console.error(error);
        res.json({
            msg: 'Error al Registrar Horario'
        });
    }

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