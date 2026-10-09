import { Router } from 'express';
import { createHorario, deleteHorario, getHorario, updateHorarioPatch, updateHorarioPut} from '../controllers/horarios.controllers.js';

const router = Router();

router.get('/', getHorario);
router.post('/', createHorario);
router.put('/', updateHorarioPut);
router.patch('/', updateHorarioPatch);
router.delete('/', deleteHorario);

export default router;
