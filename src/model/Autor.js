import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    origem: { type: String }
}, { versionKey: false });

const autor = mongoose.model("autores", autorSchema)

export default autor