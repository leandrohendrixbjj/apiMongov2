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

app.get('/api/livro/:id', (req, res) => {
    try {
        const { id } = req.params
        if (!id) throw new Error("Informe um id válido")

        const data = livros.find(livro => livro.id == id) || null

        if (data)
            res.status(200).json(data)

        if (!data)
            res.status(404).send("Livro não exsite")
    } catch (error) {
        res.status(500).send(`${error}`)
    }

})

app.post('/api/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso!")
})

app.put('/api/livro/:id', (req, res) => {
    try {
        const { id } = req.params || null

        if (!id) throw new Error("Informe um id válido")

        const data = livros.find(item => item.id == id) || null

        if (!data) res.status(404).send("Livro não exsite")

        data.name = req.body.name
        res.status(201).send("Livro Atualizado")
    } catch (error) {
        res.status(500).send(`${error}`)
    }
})

app.delete('/api/livros/:id', (req, res) => {
    try {
        const { id } = req.params || null

        if (!id) throw new Error("Informe um id válido")

        const data = livros.findIndex(item => item.id == id)

        if (data >= 0) {
            livros.splice(data, 1)
            res.status(204).send()
        }
        res.status(404).send("Livro não existe")
    } catch (error) {
        res.status(500).send(`${error}`)
    }
})

export default app