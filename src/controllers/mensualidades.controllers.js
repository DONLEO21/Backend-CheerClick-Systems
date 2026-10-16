import { dbCreateMensualidad, dbDeleteMensualidad, dbGetMensualidad } from "../services/mensualidades.services.js";

//Constrotaldor para crear una nueva mensualidad 
const CreateMensualidad = async (req , res) => {
    try {
    const inputData = req.body;

    //Usar el servicio para registrar 

    const data = await dbCreateMensualidad( inputData );

    res.json({msg: 'Registrar una nueva mensualidad', data: data})
    } catch (error) {
        console.error(error); 
        res.json({msg: 'No se pudo registrar la mensualidad'})
    }
};

//Controlador listar todas las mensualidades
const GetMensualidad = async (req, res ) => { 
    try {
        const data = await dbGetMensualidad();

        res.json({msg : 'Consultar todas las mensualidades', data: data}) 
    } catch (error) {
        console.error(error);
        res.json({msg: 'No se pudo consultar las mensualidades'})
        
    }
};

const DeleteMensualidad = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await dbDeleteMensualidad( id );

        res.json({msg: 'Elimina una de las mensualidades', data: data });
    } catch (error) {
        console.error(error);
        res.json({msg :'No se puedo eliminar la mensualidad '})  
    }
}

export {
    CreateMensualidad,
    GetMensualidad,
    DeleteMensualidad
}