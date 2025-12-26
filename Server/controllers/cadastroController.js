import express from 'express'
import { AppDataSource } from '../database/data-source.js'
import salaEntity from '../entities/sala.js'
import { Like } from 'typeorm'
import generateToken from '../../src/utils/jwt.js'

const route = express.Router()
const salaRepository = AppDataSource.getRepository(salaEntity)


route.post("/sala", async (req,res) => {

    const {nome, tipo, andar, capacidade, equip} = req.body

    await salaRepository.save({
        nome: nome,
        tipo: tipo,
        andar: andar,
        capacidade: capacidade,
        equipamentos: equip
    })

    res.status(200).send("Dados Cadastrados")

})

export default route