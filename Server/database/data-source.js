import "reflect-metadata"
import { DataSource } from "typeorm"


import Usuario from "../entities/usuario.js"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    port: 3306,
    password: "",
    database: "ALUNOIDBD",
    // synchronize: true,
    entities: [Usuario],       
    migrations: ["./Server/database/migrations/*cjs"],
})

export {AppDataSource}