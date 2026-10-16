import { dbCreateEps, dbGetEps } from "../services/eps.services.js";

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
    const data =  await dbGetEps();

    res.json({
        msg: 'Lista de EPS',
        data: data
    })
}

export {
    createEps, 
    getEps
}