import { Router } from 'express';
import { createHorario, deleteHorario, getHorario, updateHorarioPatch, updateHorarioPut} from '../controllers/horarios.controllers.js';

const router = Router();

//Definicion de rutas para horarios
router.get('/', getHorario);

//Crear un horario
router.post('/', createHorario);

//Actualizar totalmente
router.put('/', updateHorarioPut);

//Actualizar parcialmente
router.patch('/', updateHorarioPatch);

//Elimina un horario
router.delete('/', deleteHorario);

export default router;
