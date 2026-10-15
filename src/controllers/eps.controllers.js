import { dbCreateEps } from "../services/eps.services.js";

const createEps = async (req, res) => {
    
    const inputData = req.body;

    //Usar el servicio para registrar
    const data = await dbCreateEps(inputData)

    res.json({ msg: 'Registrar eps', data: data})
}

export {
    createEps
}