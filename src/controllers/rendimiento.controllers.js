import { dbCreateRendimiento, dbDeleteRendimiento, dbGetRendimiento, dbUpdateRendimiento } from "../services/rendimiento.services.js";

const createRendimiento = async (req, res) => {
    try {
        const inputData = req.body;

        const data = await dbCreateRendimiento(inputData);

        res.json({ msg: 'Registrar rendimiento', data: data })
    }
    catch (error) {
        console.error(error);

        if (error.code == 11000) {
            const field = Object.keys(error.keyValue)[0]

            return res.json({
                msg: `Error por duplicado en el campo '${field}'`,
                [field]: `El ${field} ${error.keyValue[field]} ya se encuentra registrado`
            });
        }

        if (error.name == 'ValidationError') {
            const errors = {};

            for (const field in error.errors) {
                errors[field] = error.errors[field].message;
            }

            return res.json({ errors })   
        }

        res.json({ msg: 'No se pudo registrar el rendimiento' })    
    }
}

const getRendimiento = async (req, res) => {
    try {
        const data = await dbGetRendimiento();

        res.json({
            msg: 'Lista de rendimientos',
            data: data
        })
    }
    catch (error) {
        console.error(error);

        res.json({
            msg: 'No se ha podido listar rendimientos'
        })
    }
}

const updateRendimiento = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body;

        const data = await dbUpdateRendimiento(id, inputData);

        if (!data) {
            return res.json({ msg: 'No se encontró el rendimiento' });
        }

        res.json({
            msg: 'Actualizar rendimiento',
            data: data
        });
    }
    catch (error) {
        console.error(error);

        if (error.name == 'CastError') {
            return res.json({ msg: 'Error en el formato del ID', [error.path]: `El identificador ${error.value} no tiene el formato valido que requiere MongoDB` });
        }

        if (error.code == 11000) {
            const field = Object.keys(error.keyValue)[0]

            return res.json({
                msg: `Error por duplicado en el campo '${field}'`,
                [field]: `El ${field} ${error.keyValue[field]} ya se encuentra registrado`
            });
        }

        if (error.name == 'ValidationError') {
            const errors = {};

            for (const field in error.errors) {
                errors[field] = error.errors[field].message;
            }

            return res.json({ errors })
        }

        res.json({
            msg: 'No se ha podido actualizar el rendimiento'
        })
    }
}

const deleteRendimiento = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await dbDeleteRendimiento(id);

        if (!data) {
            return res.json({ msg: 'No se encontró el rendimiento' });
        }

        res.json({
            msg: 'Eliminar rendimiento',
            data: data
        });
    }
    catch (error) {
        console.error(error);

        if (error.name == 'CastError') {
            return res.json({ msg: 'Error en el formato del ID', [error.path]: `El identificador ${error.value} no tiene el formato valido que requiere MongoDB` });
        }

        res.json({
            msg: 'No se ha podido eliminar el rendimiento'
        })
    }
}

export {
    createRendimiento,
    getRendimiento,
    updateRendimiento,
    deleteRendimiento
}