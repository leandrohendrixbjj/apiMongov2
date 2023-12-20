import Livro from '../model/Livro.js'

class LivroController {

  static async list(req, res) {
    try {
      const data = await Livro.find({}).sort({ _id: -1 })

      if (!data) {
        res.status(404).json({ success: false })
      }

      res.status(200).json({ success: true, data })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Falha na listagem dos livros' })
    }
  }

  static async findOne(req, res) {
    try {
      const { id } = req.params

      const data = await Livro.findById(id)

      if (!data) {
        req.status(404).json({ success: false })
      }

      res.status(200).json({ success: true, data })
    } catch (error) {
      console.log(error)
      res.status(404).json({ success: false, message: 'Falha na busca do livro' })
    }
  }

  static async create(req, res) {
    try {
      await Livro.create(req.body)
      res.status(201).json({ success: true })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Falha no cadastro do livro' })
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params || null

      if (!id) {
        res.status(404).json({})
      }

      await Livro.findByIdAndUpdate(id, { $set: req.body })

      res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Falha na edição do item' })
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params

      const data = Livro.findById(id)

      if (!data) {
        res.status(404).json({ success: false })
      }

      await Livro.findByIdAndDelete(id)

      res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false })
    }
  }
}

export default LivroController