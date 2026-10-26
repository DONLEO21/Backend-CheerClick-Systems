import { Router } from "express";
import {createUsuario} from '../controllers/usuarios.controllers.js'

const router = Router();

// Define las rutas para la autenticación
// 1. Registro publico de usuarios
router.post('/register', createUsuario)
// 2. Login de Usuarios
// 3. Renovación de credenciales (Token)




// Investigarrr
// 4. Recuperar Contraseña
// 5. Habilitar cuenta resgitrada publicamente

export default router;