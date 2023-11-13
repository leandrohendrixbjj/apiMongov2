import express from 'express'
import LivroController from '../controllers/LivroController.js'

const routes = express.Router()

routes.get('/api/livros', LivroController.list)
routes.get('/api/livros/:id', LivroController.findOne)
routes.post('/api/livros', LivroController.create)
routes.put('/api/livros/:id', LivroController.update)
routes.delete('/api/livros/:id', LivroController.delete)


export default routes