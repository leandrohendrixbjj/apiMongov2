import Autor from '../model/Autor.js'

class AutorController {

  static async list(req, res) {
    try {
      const data = await Autor.find({}).sort({ _id: -1 })

      if (!data) {
        res.status(404).json({ success: false })
      }

      res.status(200).json({ success: true, data })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Falha na listagem de autores' })
    }
  }

  static async findOne(req, res) {
    try {
      const { id } = req.params

      const data = await Autor.findById(id)

      if (!data) {
        req.status(404).json({ success: false })
      }

      res.status(200).json({ success: true, data })
    } catch (error) {
      console.log(error)
      res.status(404).json({ success: false, message: 'Falha na busca do Autor' })
    }
  }

  static async create(req, res) {
    try {
      await Autor.create(req.body)
      res.status(201).json({ success: true })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Falha no cadastro do Autor' })
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params || null

      if (!id) {
        res.status(404).json({})
      }

      await Autor.findByIdAndUpdate(id, { $set: req.body })

      res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Falha na edição do Autor' })
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params

      const data = Autor.findById(id)

      if (!data) {
        res.status(404).json({ success: false })
      }

      await Autor.findByIdAndDelete(id)

      res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false })
    }
  }
}

export default AutorController