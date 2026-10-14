//ODM: 
import mongoose from "mongoose";

const URI_LOCAL = 'mongodb://localhost:27017/';
const URL_REMOTA='mongodb+srv://Sebastian:Gi2008va@cluster0.qcjsdto.mongodb.net/';

//sequelize (SQL)
// Prisma (SQL, NoSQL)

const conexion = async () => {
    try {
        await mongoose.connect(URL_REMOTA)    
        console.log ('Conectado a la bases de datos de MongoDB')    
    } catch (error) {
        console.error('Error al conectar a la base de datos:' , error)
    }
 
}

export default conexion; 