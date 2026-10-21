import { dbCreateCompetencia, dbDeleteCompetencia, dbGetCompetencia, dbUpdateCompetencia, dbGetCompetencias} from "../services/competencias.services.js";


const getCompetencia = async (req, res) => {
    try {
     const inputData=req.body;
     const data = await dbGetCompetencia(inputData);

     res.json({msg: "Consulta todas las competencias", data: data});
        
    } catch (error) {
        console.error(error);
        res.json({msg: "No se pudo consultar las competencias"})
        
    }
}

const createCompetencia = async (req, res) => {
    try {
        const inputData = req.body;

        const data = await dbCreateCompetencia(inputData);

        res.json({msg: "Registra una competencia", data: data})
        
    } catch (error) {
        console.error(error);
        res.json({msg: "No se pudo regitrar la competencia"})
    }

}

const deleteCompetencia = async (req, res) => {
    try {
        const id = req.params.id;

        
        const data = await dbDeleteCompetencia( id );

    res.json({ msg : 'Elimina una plantilla de horarios', data: data });
        
    } catch (error) {
        console.error(error);
        res.json({msg: "No se pudo eliminar la competencia"});
        
    }


}

const updateCompetencia = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body

        const data = await dbUpdateCompetencia(id, inputData);
        res.json({msg: 'Actualiza una competencia', data: data});
        
    } catch (error) {
        console.error(error);

    res.json({msg: 'No se pudo actualizar la competencia'})

        
    }
}

const getCompetencias = async (req, res) => {
    try {
        const id = req.params.id
        const data = await dbGetCompetencias(id);

        res.json({msg: 'Obtiene una competencia', data: data})

        
    } catch (error) {
        console.error(error);
        res.json({msg : 'No se puede obtener una competencia'})
        
    }
}




export { 
    getCompetencia,
    createCompetencia,
    deleteCompetencia,
    updateCompetencia,
    getCompetencias
}