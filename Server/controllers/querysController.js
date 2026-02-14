import express from 'express'
import { AppDataSource } from '../database/data-source.js'
import { Like } from 'typeorm'
import generateToken from '../../src/utils/jwt.js'

import salaEntity from '../entities/sala.js'
import alunoEntity from '../entities/aluno.js'
import usuarioEntity from '../entities/usuario.js'
import funcionarioEntity from '../entities/funcionario.js'

const route = express.Router()
const salaRepository = AppDataSource.getRepository(salaEntity)
const alunoRepository = AppDataSource.getRepository(alunoEntity)
const usuarioRepository = AppDataSource.getRepository(usuarioEntity)
const funcionarioRepository = AppDataSource.getRepository(funcionarioEntity)




route.get("/alunos", async (req, res) => {
    const alunos = await usuarioRepository.find({
        relations: ["aluno"]
    })
    res.json(alunos)
})

route.get("/busca/:query", async (req, res) => {
    const {query} = req.params

    const usuarios = await usuarioRepository.find({
        where:{nome: Like(`${query}%`)},
        relations: ["aluno"]
    })

    return res.json(usuarios)
})



export default route