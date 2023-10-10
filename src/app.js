import express from "express"

const app = express()
app.use(express.json())

const livros = [
    { id: 1, name: "NodeJS" },
    { id: 2, name: "PHP" }
]

app.get('/', (req, res) => {
    res.status(200).send("Welcome to Express")
})

app.get('/api/livros', (req, res) => {
    res.status(200).json(livros)
})

app.post('/api/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso!")
})

export default app