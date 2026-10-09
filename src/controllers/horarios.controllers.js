
const getHorario = (req, res) => {
    res.send('Obtiene todos los horarios')
}

const createHorario = (req, res) => {
    res.send('Crear un horario')
}
const updateHorarioPut= (req, res) => {
    res.send('Actualizar todas las propiedades de los horarios')
}
const updateHorarioPatch = (req, res) => {
    res.send('Actualizar uno o mas propiedades de los horarios')
}

const deleteHorario =  (req, res) => {
    res.send('Eliminar un horario')
}
export {
    getHorario,
    createHorario,
    updateHorarioPut,
    updateHorarioPatch,
    deleteHorario
}