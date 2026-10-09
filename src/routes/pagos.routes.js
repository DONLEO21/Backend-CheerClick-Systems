import { Router } from 'express';
import { createPago, deletePago, getPagos, updatePagoPut, updatePagoPatch } from '../controllers/pagos.controllers.js';

const router = Router();

//Obtener todos los pagos
router.get('/', getPagos);

//Regitrar nuevos pagos
router.post('/', createPago);

//Actualizar los pagos totalmente
router.put('/', updatePagoPut)

//Actualizar los pagos parcialmente
router.patch('/', updatePagoPatch)

//Eliminar pago
router.delete('/', deletePago)

export default router;