import { Router } from "express";
import { createCompetencia, deleteCompetencia, getCompetencia, updateCompetencia, getCompetencias } from "../controllers/competencias.controllers.js";
import { authMiddleware } from "../middlewares/authenticate.middlewares.js";


const router = Router();

router.get('/', authMiddleware, getCompetencia);
router.post('/', authMiddleware, createCompetencia)
router.delete('/:id', authMiddleware, deleteCompetencia)
router.patch('/:id', authMiddleware, updateCompetencia )
router.get('/:id', authMiddleware, getCompetencias )

export default router;