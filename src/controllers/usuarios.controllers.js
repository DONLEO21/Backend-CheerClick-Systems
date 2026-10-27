
import { dbCreateUsuario, dbGetUsuario, dbUpdateUsuario, dbDeleteUsuario } from "../services/usuarios.services.js"
import { generarPassword } from "../helpers/bcrypt.helpers.js";
import { dbCreateUsuario, dbGetUsuario } from "../services/usuarios.services.js"


//Controlador define quien hace una accion especifica
const getUsuario = async (req, res) => {
     const id = req.params.id;
    try {

        const data = await dbGetUsuario(id);

        res.json({
            msg: 'Obtiene un usuario',
            data: data
        })
    }
    catch ( error ){

        console.error( error );

        if(error.name == 'CastError') {
            return res.json({
                msg: `El ID debe tener 24 caracteres y el enviado tiene ${id.lenght}`, 
                [error.path]: `El identificador ${error.value} no tiene el formato valido que requiere MongoDB`});
        }

        res.json({
            msg: 'No se puede obtener el usuario por ID'
        })
    }
}
const createUsuario = async (req, res) => {
    try {
    
        //obtenemos el usuario desde le cuerpo de la peticion (Request)
        const usuario = req.body;

         usuario.contrasena = generarPassword(usuario.contrasena);

        const newUsuario = await dbCreateUsuario(usuario);      //Llega como una Promesa (Promise)

        //Respuesta al cliente
        res.json({ mensaje: 'Registra usuario', usuario: newUsuario });
    }
    catch (error) {
        console.error(error);

        if(error.name == 'ValidationError'){
            const errors ={};

            //Iterar los erores para estraer el nombre de la propiedad y el error
            for(const field in error.errors) {
                errors[field] = error.errors[field].message;
            }
            
            res.json({errors})     //Retorna un error especifico
 
        } 

        res.send( 'Error al registrar usuario' )
    }
}


const updateUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body;

        const data = await dbUpdateUsuario(id, inputData);

        res.json({
            msg: 'Usuario Actualizado',
            data: data
        });
    }
    catch ( error){
        console.error( error);

        res.json({
            msg: 'No se ha podido actualizar el usuario'
        })
    }
}

const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await dbDeleteUsuario(id);

        res.json ({
            msg: 'Usuario eliminado',
            data: data
        })
    }
    catch ( error) {
        console.error (error);

        res.json({
            msg: 'No se ha podido eliminar el usuario'
        })
    }
}
export{
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
}
