import express from "express"
import livroRoutes from './routes/livroRoutes.js'
import autorRoutes from './routes/autorRoutes.js'

const app = express()
app.use(
  express.json(),
  livroRoutes,
  autorRoutes
)

app.get('/', (req, res) => {
  res.status(200).send("Welcome to Express")
})

export default app