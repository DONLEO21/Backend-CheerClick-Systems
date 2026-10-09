import { Router } from 'express';

const router = Router();

// Definicion de las rutas para usuarios

router.get('/', (req, res) => {
    res.json( 'Obtiene todos los usuarios' );
});

router.post('/', (req, res) => {
    res.json('Registra usuario' );
});

router.put('/', (req, res) => {
    res.json('Actualizar todos las propiedades de un usuario' );
});

router.patch('/', (req, res) => {
    res.json('Actualizar una o mas propiedades del usuario' );
});

router.delete('/', (req, res) => {
    res.json('Elimina un usuario' );
});


export default router;