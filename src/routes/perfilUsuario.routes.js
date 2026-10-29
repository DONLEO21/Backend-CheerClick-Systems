import { Router } from "express";
import { createPerfilUsuario, getPerfilUsuario, updatePerfilUsuario, deletePerfilUsuario} from "../controllers/perfilUsuario.controllers.js";

const router = Router(); 

router.post('/', createPerfilUsuario);
router.get('/:id', getPerfilUsuario);
router.patch('/:id', updatePerfilUsuario);
router.delete('/:id', deletePerfilUsuario);

//Exportar las rutas definidas en este archivo
export default router;