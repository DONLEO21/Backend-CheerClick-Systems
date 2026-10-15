import { dbCreateMensualidad } from "../services/mensualidades.services.js";

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
}

export {
    CreateMensualidad
}