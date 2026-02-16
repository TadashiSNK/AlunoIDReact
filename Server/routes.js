import express from 'express'
import loginController from './controllers/loginController.js'
import cadastroController from './controllers/cadastroController.js'
import querysController from './controllers/querysController.js'


const routes = express.Router()

routes.use("/login", loginController)
routes.use("/cadastro", cadastroController)
routes.use("/controle", querysController)

export default routes