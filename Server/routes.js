import express from 'express'
import loginController from './controllers/loginController.js'


const routes = express.Router()

routes.use("/login", loginController)

export default routes