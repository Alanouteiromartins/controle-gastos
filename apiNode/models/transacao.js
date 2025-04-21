import mongoose from "mongoose";

const transacaoSchema = new mongoose.Schema({
    data: {
        type: Date,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    tipo: {
        type: [String],
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    observacao: {
        type: String,
        required: false
    }
});

export default mongoose.model('Transacao', transacaoSchema)
