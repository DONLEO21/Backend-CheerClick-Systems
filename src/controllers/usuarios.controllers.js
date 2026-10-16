import { dbCreateUsuario, dbGetUsuario } from "../services/usuarios.services.js"

//Controlador define quien hace una accion especifica
const getUsuario = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await dbGetUsuario(id);

        res.json({
            msg: 'Obtiene un usuario',
            data: data
        })
    }
    catch ( error ){
        console.error( error );

        res.json({
            msg: 'No se puede obtener usuario por su ID'
        })
    }
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
