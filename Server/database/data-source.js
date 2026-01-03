import "reflect-metadata"
import { DataSource } from "typeorm"


import Usuario from "../entities/usuario.js"
import Aluno from '../entities/aluno.js'
import Sala from '../entities/sala.js'
import Funcionario from "../entities/funcionario.js"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    port: 3306,
    password: "",
    database: "ALUNOIDBD",
    // synchronize: true,
    entities: [Usuario, Aluno, Sala, Funcionario],       
    migrations: ["./Server/database/migrations/*cjs"],
})

export {AppDataSource}