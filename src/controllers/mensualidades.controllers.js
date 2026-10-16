import { dbCreateMensualidad, dbGetMensualidad } from "../services/mensualidades.services.js";

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

const GetMensualidad = async (req, res ) => { 
    try {
        const data = await dbGetMensualidad();

        res.json({msg : 'Consultar todas las mensualidades', data: data}) 
    } catch (error) {
        console.error(error);
        res.json({msg: 'No se pudo consultar las mensualidades'})
        
    }
};

export {
    CreateMensualidad,
    GetMensualidad
}