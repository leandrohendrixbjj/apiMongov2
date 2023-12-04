import express from "express"
import livroRoutes from './routes/livroRoutes.js'

const app = express()
app.use(express.json(),
  livroRoutes
)

app.get('/', (req, res) => {
  res.status(200).send("Welcome to Express")
})

export default app