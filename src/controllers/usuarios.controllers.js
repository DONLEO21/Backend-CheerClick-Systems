import { dbCreateUsuario } from "../services/usuarios.services"

//Controlador define quien hace una accion especifica
const getUsuario = (req, res) => {
    res.send( 'Listar todos los usuarios')
}
const createUsuario = async (req, res) => {
    //obtenemos el usuario desde le cuerpó de la peticion (Request)
    const usuario = req.body;

    const newUsuario = await dbCreateUsuario(usuario);      //Llega como una Promesa (Promise)

    //Respuesta al cliente
    res.send( 'Registra usuario', usuario: newUsuario)
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
