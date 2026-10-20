import { dbDeletePago, dbInsertPago, dbReadPagos, dbUpdatePago } from "../services/pagos.services.js";

//El controlador define quien hace una accion especifica
const getPagos = async (req, res) => {
    try {
        const data = await dbReadPagos();
        res.json({ msg: 'Consultar todos los pagos registrados', data: data})
    } catch (error) {

        console.error(error)
        res.json({ msg: 'No se pudo consultar los pagos registrados'})
    }
}

const createPago = async (req, res)  => {
    try {
    // Obtenemos el pago desde el cuerpo de la peticion
    const inputData = req.body;

    //Conecta con el servicio para crear un pago en la base de datos 
    const data = await dbInsertPago(inputData); //Llega como una promesa 

    //Respuesta del cliente 
    res.json({msg :'Registrar Pagos', data: data})
    } catch (error) {
        console.error(error); 
        res.json({msg: 'Error al registrar pago'})
    }
}

const updatePagoPatch = async  (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body;

        const data = await dbUpdatePago(id, inputData);

        res.json({ msg : 'Actualizar los campos del pago', data: data });
    } catch (error) {
        console.error(error);
        res.json({ msg : 'No se pudo actualizar los campos del pago'})
        
    } 
}

const deletePago = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await dbDeletePago( id );
        res.json({ msg: 'Eliminar un pago', data: data})
    } catch (error) {
        console.error(error);
        res.json({msg :'No se pudo eliminar el pago'})
    }
}

export {
    getPagos,
    createPago,
    updatePagoPatch, 
    deletePago
}