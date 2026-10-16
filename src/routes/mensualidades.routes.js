import { Router } from "express";
import { CreateMensualidad, GetMensualidad } from "../controllers/mensualidades.controllers.js";



const router = Router(); //Crear una instancia de las rutas de express

//Define las rutas para las mensualidades 

router.post('/', CreateMensualidad);

router.get('/', GetMensualidad);

// router.put('/', )

// router.patch('/', )

// router.delete('/', )

//Exportar las rutas definidas de este archivo

export default router;