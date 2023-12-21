import mongoose from "mongoose"
import { autorSchema } from './Autor.js'

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, require: true },
    editora: { type: String },
    preco: { type: Number },
    numeroPaginas: { type: Number },
    autor: autorSchema
}, { versionKey: false })

const livro = mongoose.model("livros", livroSchema)

export default livro