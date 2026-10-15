import { Router } from "express";
import { createEps } from "../controllers/eps.controllers.js";

const router = Router(); //Crea una instancia de las rutas de express

//Define las rutas paa las eps
router.post( '/', createEps);

//Exportar las rutas definidas en este archivo
export default router;