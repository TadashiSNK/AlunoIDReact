import { EntitySchema } from "typeorm";

const usuario = new EntitySchema({
    name: "usuario",
    tableName: 'usuario',
    columns: {
        id_usuario: {type: "int", primary:true, generated:true},
        tipo_usuario: {
            type: "enum",
            enum: ["Admin", "Aluno", "Responsavel Legal", "Funcionario"],
            default: "Aluno",
            nullable:false
        },
        nome: {type: "varchar", length: 255, nullable:false},
        data_nasc: {type: "date"},
        cpf: {type: "varchar", length: 11, nullable:false, unique:true},
        rg: {type: "varchar", length: 255},
        email: {type: "varchar", length: 255, nullable:false, unique:true},
        senha: {type:"varchar", length: 255, nullable:false},
        sexo: {
            type:"enum",
            enum: ["H", "M"]
        },
        cep: {type: "varchar", length:15, nullable:false},
        numero_casa: {type: "varchar", length:10, nullable:false},
        complemento: {type: "varchar", length:255, nullable:false},
    }
})

export default usuario