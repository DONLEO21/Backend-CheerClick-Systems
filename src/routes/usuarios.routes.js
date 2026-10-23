import { Router } from 'express';
import { getUsuario, createUsuario, updateUsuario, deleteUsuario } from '../controllers/usuarios.controllers.js';

const router = Router();

// Definicion de las rutas para usuarios

router.get('/:id', getUsuario);
router.post('/', createUsuario);
router.patch('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

export default router;