import { dbCreateMensualidad, dbDeleteMensualidad, dbGetMensualidad, dbGetMensualidades, dbUpdateMensualidad } from "../services/mensualidades.services.js";

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

//Controlador para eliminar una de las mensualidades
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

//Controlador para actualizar los campos de la mensualidad
const UpdateMensualidad = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body;

        const data = await dbUpdateMensualidad(id, inputData);

        res.json({ msg : 'Actualizar los campos de la mensualidad ', data: data });
    } catch (error) {
        console.error(error);
        res.json({ msg : 'No se puedo actualizar los campos de la mensualidad'})
        
    }
}

const GetMensualidades = async (req, res) => {
    try {
        const id = req.params.id; 
        const data = await dbGetMensualidades (id);

        res.json({msg: 'Consultar una de las mesualidades por su ID', data: data});
    } catch (error) {
        console.error(error);
        res.json({msg : 'No se pudo encontrar la mensualidad'});
    }
}


export {
    CreateMensualidad,
    GetMensualidad,
    DeleteMensualidad,
    UpdateMensualidad,
    GetMensualidades
}