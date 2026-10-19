import { dbCreateContactoE, dbDeleteContactoE, dbGetContactoE, dbUpdateContactoE } from "../services/contactoEmergencia.services.js";

const getContactoEmergencia = async (req, res) => {
    try {
        const data = await dbGetContactoE();

        res.json({msg : 'Listar un contacto de emergencia', data: data})
    }
    catch (error){
        console.error(error);

        res.json({msg: 'No se ha podido listar el contacto de emergencia'})
    }

}

const createContactoEmergencia = async (req, res) => {
    try {
        
    const inputData = req.body;
    const data = await dbCreateContactoE(
        inputData
    );

    res.json({msg :'Registrar contacto de emergencia', data: data})
    }
    catch (error) {
        console.error(error);

        res.json({msg: 'No se pudo registrar contacto de emergencia'})

    }
}

const updateContactoEmergencia = async (req, res) => {
    try{
        const id =  req.params.id;
        const inputData = req.body;

        const data = await dbUpdateContactoE (id, inputData)

        res.json({
            msg: 'Contacto de emergencia actualizada',
            data: data
        });
    }
    catch ( error ){
        console.error(error);

        res.json({
            msg: 'No se ha podido actualizar el contacto de emergencia'
        })
    }
}

const deleteContactoEmergencia =async (req, res) => {
    try {
        const id = req.params.id;
        const data = await dbDeleteContactoE(id);

        res.json ({
            msg: 'Elimine  un contacto de emergencia',
            data: data
        });
    }
    catch ( error ) {
        console.error(error);

        res.json({msg: 'No se ha podido eliminar el contacto de emergencia'})
    }
}

export {
    createContactoEmergencia,
    updateContactoEmergencia, 
    deleteContactoEmergencia,
    getContactoEmergencia
}