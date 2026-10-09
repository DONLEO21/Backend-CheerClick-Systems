const getPagos = (req, res) => {
    res.send('Listar todos los pagos registrados')
}

const createPago = (req, res)  => {
    res.send('Registrar Pagos')
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