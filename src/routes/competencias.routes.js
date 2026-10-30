import { Router } from "express";
import { createCompetencia, deleteCompetencia, getCompetencia, updateCompetencia, getCompetencias } from "../controllers/competencias.controllers.js";
import { authMiddleware } from "../middlewares/authenticate.middlewares.js";
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware.middleware.js";


const router = Router();

router.get('/', authMiddleware, getCompetencia);
router.post('/', [authMiddleware, authorizationMiddleware (['Administrador'])], createCompetencia)
router.delete('/:id', authMiddleware, authorizationMiddleware, deleteCompetencia)
router.patch('/:id', authMiddleware, updateCompetencia )
router.get('/:id', authMiddleware,  getCompetencias )

export default router;