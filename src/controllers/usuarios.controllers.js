//Controlador define quien hace una accion especifica
const getUsuario = (req, res) => {
    res.send( 'Listar todos los usuarios')
}
const createUsuario = (req, res) => {
    res.send( 'Registra usuario')
}

const updateUsuarioP = (req, res) => {
    res.send( 'Actualizar parcialmente las propiedades de los usuarios')
}

const updateUsuario = (req, res) => {
    res.send( 'Actualizar todas las propiedades de los usuarios')
}

const deleteUsuario = (req, res) => {
    res.send( 'Eliminar usuarios')
}
export{
    getUsuario,
    createUsuario,
    updateUsuario,
    updateUsuarioP,
    deleteUsuario
}
