import Livro from '../model/Livro.js'

class LivroController {
  static async list(req, res) {
    try {
      const data = await Livro.find({}).sort({ _id: -1 })
      if (!data) res.status(404).json({})
      res.status(200).json(data)
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error })
    }
  }

  static async findOne(req, res) {
    try {
      const { id } = req.params
      if (!id) throw new Error("Informe um id válido")

      Livro.findById(id)
        .then(livro => res.json({ sucess: true, data: livro }))
        .catch(error => res.status(404).json({ success: false, message: error.message }));

    } catch (error) {
      console.log(error)
      res.status(404).json()
    }
  }

  static async create(req, res) {
    try {
      const storeLivro = await Livro.create(req.body)
      res.status(201).json({ success: true, data: storeLivro })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: error })
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params || null

      if (!id) res.status(404).json({})

      Livro.findByIdAndUpdate(id, { $set: req.body })
        .then(() => res.status(200).json({ success: true, data: req.body }))
        .catch(error => res.status(500).json({ success: false, error: error.message }))

    } catch (error) {
      res.status(500).send(`${error}`)
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params

      if (!id) throw new Error("Informe um id válido")

      Livro.findOneAndDelete(id)
        .then(() => res.status(204).json({}))
        .catch(error => res.status(500).json({ success: false, message: error.message }))
    } catch (error) {
      res.status(500).send(`${error}`)
    }
  }
}

export default LivroController