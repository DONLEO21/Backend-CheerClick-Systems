import { Router } from "express";
import { createEps, deleteEps, getEps } from "../controllers/eps.controllers.js";

const router = Router(); 

// Define las rutas para las eps
router.post('/', createEps);
router.get('/', getEps);
router.delete('/:id', deleteEps);

// Exportar las rutas definidas en este archivo
export default router;
