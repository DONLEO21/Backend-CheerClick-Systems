import { Router } from "express";
import { createInscripcion_competencia, deleteInscripcion_competencia, getInscripcion_competencia, getInscripciones_competencias, updateInscripcion_competencia } from "../controllers/inscripciones_competencias.controllers.js";
import { authMiddleware } from "../middlewares/authenticate.middlewares.js";

const router = Router();

router.post('/', createInscripcion_competencia);
router.get('/', authMiddleware, getInscripcion_competencia);
router.patch('/:id', updateInscripcion_competencia);
router.delete('/:id', authMiddleware, deleteInscripcion_competencia);
router.get('/:id', getInscripciones_competencias )

export default router;