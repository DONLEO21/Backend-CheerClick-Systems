// mongoose.createConnection('mongodb://127.0.0.1:27017/test'
// ODM:
import mongoose from "mongoose";

const URI_LOCAL = ''
const URL_REMOTE = 'mongodb+srv://Leonardo:Xjueigon8@cluster0.rpkg3fc.mongodb.net/'

//Sequelize (SQL) -> MySQL, PotgreSQL, MariaDb, SQLite
//Prisma (SQL, NoSQL) -> MySQL, PotgreSQL, MariaDb, SQLite

const conexion = async () => {
    try {
        await mongoose.connect(URL_REMOTE)
        console.log ('Conectado a la base de datos MongoDB')
    } catch (error) {
        console.error ('Error al conectar a la base de datos:', error);
    }
}

export default conexion;