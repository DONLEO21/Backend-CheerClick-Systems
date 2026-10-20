import { Schema, model } from "mongoose";

const HorarioSchema = new Schema({
    fecha: {
        type: Date,
        required: true
    },
    enfoque: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100 
    },
    lugar: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100 
    },
    notasIndicaciones: {
        type: String,
        required: true,
        trim: true,
        maxlength: 250
    },
    estado: {
        type: String, 
        enum: ['Activo', 'Inactivo'],
        required: true,
        default: 'Activo'
    },
    tipo: {
        type: String, 
        enum: ['Parther', 'Gimnasia', 'Coreografía'],
        required: true
    },
    franjaInicio: {
        type: String,
        required: true,
        match: /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/
    },
    franjaFin: {
        type: String,
        required: true,
        match: /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/,
        validate: {
            validator: function (valorFin) {
                const toMinutes = (timeStr) => {
                    if (!timeStr) return 0;
                    const [h, m] = timeStr.split(':').map(Number);
                    return (h * 60) + m;
                };

                const horaInicio = this.franjaInicio || (this.getUpdate ? this.getUpdate().$set?.franjaInicio : null);

                if (!horaInicio) return true; 

                return toMinutes(valorFin) > toMinutes(horaInicio);
            },
            message: 'La hora fin debe ser posterior a la hora inicio'
        }
    },
    nivel: {
        type: Schema.Types.ObjectId,
        ref: 'Nivel',
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

const HorarioModel = model('Horario', HorarioSchema);

export default HorarioModel;