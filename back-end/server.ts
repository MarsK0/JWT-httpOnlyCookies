import express from 'express'
import routes from './routes'
import cors from 'cors'

const server = express()

server.use(cors({
  credentials: true,
  origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
}))
server.use(express.json())
server.use(routes)

server.listen(3333, () => {
  console.log('Servidor rodando...')
}) 