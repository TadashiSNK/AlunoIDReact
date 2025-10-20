import express from 'express'
import { AppDataSource } from './database/data-source.js'
import routes from './routes.js'

const server = express()
const port = 3333

server.use(express.json())
server.use("/", routes)

AppDataSource.initialize()
    .then(async () => {
        console.log("Banco de dados conectado")
    })

server.listen(port, () => {
    console.log(`Server rodando, Porta: ${port}`)
})