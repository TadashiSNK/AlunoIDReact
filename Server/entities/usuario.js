import { EntitySchema } from "typeorm";

const usuario = new EntitySchema({
    name: "usuario",
    tableName: 'usuario',
    columns: {
        id_usuario: {type: "int", primary:true, generated:true},
        nome: {type: "varchar", length: 255, nullable:false},
        cpf: {type: "varchar", length: 11, nullable:false, unique:true},
        email: {type: "varchar", length: 255, nullable:false, unique:true},
        cep: {type: "varchar", length:15, nullable:false},
        numero_casa: {type: "varchar", length:10, nullable:false},
        senha: {type:"varchar", length: 255, nullable:false},
        escola: {type: "varchar", length: 255, nullable:false},
        usuario_ativo: {type:"boolean", nullable:false},
        em_aula: {type: "boolean", nullable:false},
        tipo_usuario: {
            type: "enum",
            enum: ["Admin", "Aluno", "Responsavel", "Professor"],
            default: "Aluno",
            nullable:false
        },
        carteirinhaHash: {type: "varchar", length: 255, nullable:false, unique:true}
    }
})

export default usuario