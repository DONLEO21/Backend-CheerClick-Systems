import {dbCreateMetodoPago, dbDeleteMetodoPago, dbGetMetodoPago, dbGetMetodoPagos, dbUpdateMetodoPago } from "../services/metodoPago.services.js";

const getMetodoPago = async (req, res) => {
    try {
        const data = await dbGetMetodoPago
        res.json({ msg: 'Consultar todos los metodos de pagos registrados', data: data})
        
    } catch (error) {

        console.error(error)
        res.json({ msg: 'No se pudo consultar los metodos de pagos registrados'})
        
    }
}

const createMetodoPago = async (req, res) => {
    try {
        const inputData = req.body;

        const data = await dbCreateMetodoPago(inputData)
        res.json({ msg: 'Registrar un nuevo metodo de pago', data: data})
    } catch (error) {
        console.error(error)
        res.json({ msg: 'No se pudo registrar el nuevo metodo de pago'})
    }
}

const deleteMetodoPago = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await dbDeleteMetodoPago(id);
        res.json({ msg: 'Eliminar un de los metodos de pago registrados', data: data})
    } catch (error) {
        console(error)
        res.json({ msg: ' No se pudo eliminar el metodo de pago'})
    }
}

const updateMetodoPago = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData =  req.body;

        const data = await dbUpdateMetodoPago(id, inputData);
        res.json({ msg: 'Actualizar los campos de metodo de pago', data: data})
    } catch (error) {
        console(error)
        res.json({ msg: 'No se pudo actulizar los campos de metodo de pago'})
    }
}

const getMetodoPagos = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await dbGetMetodoPagos(id)
        res.json({ msg: 'Consultar uno de los metodos de pago por su ID', data: data})
    } catch (error) {
        console(error)
        res.json({ msg: 'No se pudo encontrar el metodo de pago'})
    }
}

export {
    getMetodoPago,
    createMetodoPago,
    getMetodoPagos,
    updateMetodoPago,
    deleteMetodoPago
}