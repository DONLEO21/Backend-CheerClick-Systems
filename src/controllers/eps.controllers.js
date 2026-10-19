import { dbCreateEps, dbDeleteEps, dbGetEps, dbUpdateEps } from "../services/eps.services.js";

const createEps = async (req, res) => {
    try {
        const inputData = req.body;

    //Usar el servicio para registrar
    const data = await dbCreateEps(inputData)

    res.json({ msg: 'Registrar eps', data: data})
    }
    catch (error){
        console.error(error)

        res.send('No se pudo registrar la EPS')
    }
}

const getEps = async (req, res) => {
    try {
        const data =  await dbGetEps();

        res.json({
            msg: 'Lista de EPS',
            data: data
        })
    }
    catch ( error ) {
        console.error(error);

        res.json({
            msg: 'No se ha podido listar las eps'
        })
    }
}

const deleteEps = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await dbDeleteEps(id);

        res.json ({
            msg : 'Elimine una EPS',
            data : data
        });
    }
    catch ( error ) {
        console.error(error);

        res.json({
            msg: 'No se ha podido eliminar la eps'
        })
    }
}

const updateEps = async (req, res) => {
    try {
        const id =  req.params.id;
        const inputData = req.body;
    
        const data = await dbUpdateEps(id, inputData);

        res.json({
            msg: 'Eps Actualizada',
            data: data
        });
    }
    catch ( error ){
        console.error(error);

        res.json({
            msg: 'No se ha podido actualizar la eps'
        })
    }
}

export {
    createEps, 
    getEps,
    deleteEps,
    updateEps
}