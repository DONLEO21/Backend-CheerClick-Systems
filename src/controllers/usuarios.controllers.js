import { dbCreateUsuario } from "../services/usuarios.services.js"

//Controlador define quien hace una accion especifica
const getUsuario = (req, res) => {
    res.send( 'Listar todos los usuarios')
}
const createUsuario = async (req, res) => {
    try {
    
        //obtenemos el usuario desde le cuerpó de la peticion (Request)
        const usuario = req.body;

        const newUsuario = await dbCreateUsuario(usuario);      //Llega como una Promesa (Promise)

        //Respuesta al cliente
        res.json({ mensaje: 'Registra usuario', usuario: newUsuario });
    }
    catch (error) {
    console.error( error );
        res.send( 'Error al registrar usuario' )
    }
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
