// Servicio se habla con la base de datos. Estas funciones realizaran las consultas a la base de datos 

import PagosModel from "../models/pagos.model.js"

// TODO: Conectar el modelo de pagos con la Base de datos 
const dbReadPagos = () => {
}

const dbInsertPago = async (newPago) => {
    return await PagosModel.create(newPago);
}

const dbUpdatePago = () => {}

const dbDeletePago = () => {}

export {
    dbReadPagos,
    dbInsertPago,
    dbUpdatePago,
    dbDeletePago
}