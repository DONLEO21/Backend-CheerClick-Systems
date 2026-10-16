import { Router } from "express";
import { createEps, getEps } from "../controllers/eps.controllers.js";

const router = Router(); //Crea una instancia de las rutas de express

//Define las rutas paa las eps
router.post( '/', createEps);
router.get ('/', getEps);

//Exportar las rutas definidas en este archivo
export default router;