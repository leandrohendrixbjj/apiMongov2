import express from 'express'
import AutorController from '../controllers/AutorController.js'

const routes = express.Router()

routes.get('/api/autores', AutorController.list)
routes.get('/api/autores/:id', AutorController.findOne)
routes.post('/api/autores', AutorController.create)
routes.put('/api/autores/:id', AutorController.update)
routes.delete('/api/autores/:id', AutorController.delete)


export default routes