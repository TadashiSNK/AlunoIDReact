import express from 'express'
import loginController from './controllers/loginController.js'
import cadastroController from './controllers/cadastroController.js'


const routes = express.Router()

routes.use("/login", loginController)
routes.use("/Cadastro", cadastroController)

export default routes