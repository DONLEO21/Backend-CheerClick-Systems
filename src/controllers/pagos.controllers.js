import { dbInsertPago } from "../services/pagos.services.js";

//El controlador define quien hace una accion especifica
const getPagos = (req, res) => {
    res.send('Listar todos los pagos registrados')
}

const createPago = async (req, res)  => {
    try {
    // Obtenemos el pago desde el cuerpo de la peticion
    const pago = req.body;

    //Conecta con el servicio para crear un pago en la base de datos 
    const newPago = await dbInsertPago(pago); //Llega como una promesa 

    //Respuesta del cliente 
    res.json({msg :'Registrar Pagos', pago : newPago})
    } catch (error) {
        console.error(error); 
        res.json({msg: 'Error al registrar usuario'})
    }
}

const updatePagoPut = (req, res) => {
    res.send('Actualizar todas las propiedades de los pagos')
}

const updatePagoPatch =  (req, res) => {
    res.send('Actualizar una o mas propiedades del los pagos')
}

const deletePago = (req, res) => {
    res.send('Eliminar un pago registrado')
}

export {
    getPagos,
    createPago,
    updatePagoPut,
    updatePagoPatch, 
    deletePago
}