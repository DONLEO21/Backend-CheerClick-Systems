import { dbCreatePlantilla_horario } from "../services/plantilla_horarios.services.js";

const createPlantillahorario = async (req, res) => {
    try {
    // Extrae los datos del cuerpo de la peticion
    const inputData = req.body;
    // Usar el servicio para registrar
    const data = await dbCreatePlantilla_horario(inputData);
  
    res.json({msg: 'Registra la plantilla de horario', data : data});
        
    } catch (error) {
        console.error(error);
        res.json({msg: "No se pudo registrar la plantilla horario"})
    }
}

export {
    createPlantillahorario
}