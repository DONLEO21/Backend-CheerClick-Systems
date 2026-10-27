import { Router } from "express";
import {createUsuario} from '../controllers/usuarios.controllers.js'
import { loginUser, verifyAuthenticate } from "../controllers/auth.controllers.js";

const router = Router();

// 1. Registro publico de usuarios (default: CUSTOMER) Middleware asegurarme que solo se registre CUSTOMER
router.post( '/register', createUsuario);     

// 2. Login de usuarios
router.post( '/login', loginUser );

// 3. Renovación de Credenciales (Token)
router.get( '/renew-token', verifyAuthenticate );

// Investigarrr
// 4. Recuperar Contraseña
// 5. Habilitar cuenta resgitrada publicamente

export default router;