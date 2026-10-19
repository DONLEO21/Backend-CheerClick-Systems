import { dbCreateNivel, dbDeleteNivel, dbGetNivel, dbGetNiveles, dbUpdateNivel } from "../services/niveles.services.js";

const createNivel = async (req, res) => {
    try {
        const inputData = req.body;

        const data = await dbCreateNivel(inputData);

        res.json({msg : 'Registrar un nivel', data : data});
        
    } catch (error) {
        console.error
        res.json({msg : 'No se pudo registrar un nivel'})
        
    }
}

const getNivel = async (req, res) => {
    try {
        const inputData=req.body;
        const data = await dbGetNivel(inputData);
        res.json({msg: 'Consulta los niveles', data : data})
    } catch (error) {
        console.error(error);
        res.json({msg: 'No se pudo consultar los niveles'})
        
    }
}

const updateNivel = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body

        const data = await dbUpdateNivel(id, inputData);

        res.json({msg: 'Actualiza un nivel', data : data})
        
    } catch (error) {
        console.error(error);
        res.json({msg: 'No se pudo actualizar el nivel'})
    }

}

const deleteNivel = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await dbDeleteNivel(id);

        res.json({msg: "Elimina un nivel", data : data})
        
    } catch (error) {
        console.error(error);
        res.json({msg : 'No se pudo eliminar el nivel'})
        
    }

}

const getNiveles = async (req, res) => {
    try {
        const id = req.params.id

        const data = await dbGetNiveles(id);

        res.json({msg : 'Obtiene un nivel', data: data})
        
    } catch (error) {
        console.error(error);
        res.json({msg: 'No se pudo obtener un nivel'})
    }
}


export {
    createNivel,
    getNivel,
    updateNivel,
    deleteNivel,
    getNiveles
}