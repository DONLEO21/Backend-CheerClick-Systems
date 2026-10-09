import { Router } from 'express';

const router = Router();

//Obtener todos los pagos
router.get('/', (req, res) => {
    res.send('Listar todos los pagos registrados')
});

//Regitrar nuevos pagos
router.post('/', (req, res) => {
    res.send('Registrar Pagos')
});

//Actualizar los pagos totalmente
router.put('/', (req, res) => {
    res.send('Actualizar todas las propiedes de los pagos')
})

//Actualizar los pagos parcialmente
router.patch('/', (req, res) => {
    res.send('Actualizar una o mas propiedades del los pagos')
})

//Eliminar pago
router.delete('/', (req, res) => {
    res.send('Eliminar un pago registrado')
})


export default router;