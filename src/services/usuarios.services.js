// Servicio se habla con la db. Estas funciones
// realizaran la consultas a la db

import usuarioModel from "../models/usuarios.models.js"

//TODO: Conectar el modelo de usuarios con la base de datos
const dbCreateUsuario = async ( newUsuario ) => {
    return await usuarioModel.create(newUsuario);
}

const dbGetUsuario = async (id) => {
    return await dbGetUsuario.findById(id)
}

const dbUpdateUsuario = () => {}

const dbDeleteUsuario = () => {}

export {
    dbCreateUsuario,
    dbGetUsuario,
    dbUpdateUsuario,
    dbDeleteUsuario
}