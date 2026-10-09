import { Router } from 'express';

const router = Router();

//Definicion de rutas para horarios
router.get('/', (req, res) => {
    res.send('Obtiene todos los horarios')
});

//Crear un horario
router.post('/', (req, res) => {
    res.send('Registrar horarios')
});

//Actualizar totalmente
router.put('/', (req, res) => {
    res.send('Actualizar todas las propiedades de los horarios')
});

//Actualizar parcialmente
router.patch('/horarios', (req, res) => {
    res.send('Actualizar una o mas propiedades de los horarios')
});

//Elimina un horario
router.delete('/', (req, res) => {
    res.send('Eliminar un horario')
});

export default router;
