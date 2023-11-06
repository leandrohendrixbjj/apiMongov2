import express from "express"
import Livro from './model/Livro.js'

const app = express()
app.use(express.json())

const livros = [
  { id: 1, name: "NodeJS" },
  { id: 2, name: "PHP" }
]

app.get('/', (req, res) => {
  res.status(200).send("Welcome to Express")
})

app.get('/api/livros', async (req, res) => {
  try {
    const data = await Livro.find({})
    if (!data) res.status(404).json({})
    res.status(200).json(data)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error })
  }
})

app.get('/api/livro/:id', async (req, res) => {
  try {
    const { id } = req.params
    if (!id) throw new Error("Informe um id válido")

    const data = await Livro.find({ "_id": id }) || null

    if (!data)
      res.status(404).send("Livro não exsite")

    if (data)
      res.status(200).json(data)

  } catch (error) {
    console.log(error)
    res.status(404).json()
  }

})

app.post('/api/livros', async (req, res) => {
  try {
    Livro.insertMany(req.body)
    res.status(201).send("Livro cadastrado com sucesso!")
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error })
  }
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