import { dbCreatePlantilla_horario, dbDeletePlantilla_horario, dbGetPlantilla_horario, dbGetPlantilla_horarios, dbUpdatePlantilla_horario } from "../services/plantilla_horarios.services.js";

const createPlantillahorario = async (req, res) => {
    try {
    // Extrae los datos del cuerpo de la peticion
    const inputData = req.body;
    // Usar el servicio para registrar
    const data = await dbCreatePlantilla_horario(inputData);
  
    res.status(201).json({msg: 'Registra la plantilla de horario', data : data});
        
    } catch (error) {
        console.error(error);
        res.json({msg: "No se pudo registrar la plantilla horario"})
    }
}

const getPlantillahorario = async (req, res) => {
    try {
        const inputData=req.body;

        const data = await dbGetPlantilla_horario(inputData);

        res.json({msg: 'Consulta las plantillas de horarios', data : data});
        
    } catch (error) {
        console.error(error);
        res.json({msg: "No se pudo consultar las plantillas de horarios"})
    }
}

const deletePlantillahorario = async (req, res) => {
    try {
        const id = req.params.id;

        const data =  await dbDeletePlantilla_horario(id);

        res.json({ msg : 'Elimina una plantilla de horarios', data: data });
        
    } catch (error) {
        console.error(error);
        res.json({msg: "No se puede eliminar las plantillas de horarios"})
    }

}

const updatePlantillahorario= async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body

        const data = await dbUpdatePlantilla_horario(id, inputData);

        res.json({ msg : 'Actualiza una plantilla de horarios', data: data });
        
    } catch (error) {
        console.error(error);
        res.json({msg: "No se puede actualizar las plantillas de horarios"})
    }

}

const getPlantillahorarios = async (req, res) => {
    try {
        const id = req.params.id

        const data = await dbGetPlantilla_horarios(id);

        res.json({msg : 'Obtiene una plantilla de horario', data: data})
        
    } catch (error) {
        console.error(error);
        res.json({msg: "No se puede obtener una plantilla de horario"})
    }

}

export {
    createPlantillahorario,
    getPlantillahorario,
    deletePlantillahorario,
    updatePlantillahorario,
    getPlantillahorarios
}