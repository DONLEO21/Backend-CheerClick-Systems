import { dbCreatePlanAsociado, dbDeletePlanAsociado, dbGetPlanAsociado, dbGetPlanesAsociados, dbUpdatePlanAsociado } from "../services/planAsociado.sevices.js";

const CreatePlanAsociado = async (req, res ) => {
    try {
        const inputData = req.body;

        const data = await dbCreatePlanAsociado(inputData);
        res.json({ msg: 'Registra un plan asociado', data: data}) 
    } catch (error) {

        console.error(error)
        res.json({ msg: 'No se puedo registrar el plan asociado'})
        
    }
}

const GetPlanAsociado = async (req, res) => {
    try {
    
        const data = await dbGetPlanAsociado();
        res.json({ msg: 'Consultar todos los planes asociados', data: data})
        
    } catch (error) {

        console.error(error)
        res.json({msg: 'No se pudo consultar los planes asociados'})
        
    }
}

const DeletePlanAsociado = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await dbDeletePlanAsociado( id );
        res.json({ msg: 'Eliminar un plan asociado', data: data})
    } catch (error) {
        console.error(error);
        res.json({msg :'No se pudo eliminar el plan asociado '})
    }
}

const UpdatePlanAsociado = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body;

        const data = await dbUpdatePlanAsociado(id, inputData);

        res.json({ msg : 'Actualizar los campos del plan asociado ', data: data });
    } catch (error) {
        console.error(error);
        res.json({ msg : 'No se puedo actualizar los campos del plan asociado '})
        
    }
}

const GetPlanesAsociados = async (req, res) => {
    try {
        const id = req.params.id; 
        const data = await dbGetPlanesAsociados (id);

        res.json({msg: 'Consultar uno de los planes por su ID', data: data});
    } catch (error) {
        console.error(error);
        res.json({msg : 'No se pudo encontrar el plan asociado'});
    }
}


 export{
    CreatePlanAsociado,
    GetPlanAsociado,
    DeletePlanAsociado,
    UpdatePlanAsociado,
    GetPlanesAsociados
}