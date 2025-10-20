import "reflect-metadata"
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    port: 3306,
    password: "",
    database: "ALUNOIDBD",
    // synchronize: true,
    entities: ["./Server/entities/*.js"],       
    migrations: ["./Server/database/migrations/*cjs"],
})

export {AppDataSource}