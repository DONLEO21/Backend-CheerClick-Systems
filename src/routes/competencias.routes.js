import { Router } from "express";
import { createCompetencia, deleteCompetencia, getCompetencia } from "../controllers/competencias.controllers.js";


const router = Router();

router.get('/', getCompetencia);
router.post('/', createCompetencia)
router.delete('/:id', deleteCompetencia)

export default router;