import { EntitySchema } from "typeorm";

const aluno = new EntitySchema({
    name: "aluno",
    tableName: "aluno",
    columns: {
        id_aluno: {type: "int", primary:true},
        serie: {type: "int"},
        turma: {type: "char", length: 1},
        modalidade_ensino: {type: "varchar", length:255},
        turno: {
            type: "enum",
            enum: ["Manhã", "Tarde", "Noite"],
        },
        necessidades_especiais: {type: "boolean", default:false},
        necessidades_desc: {type: "text"},
    },

    relations: {
        usuario: {
            type: "one-to-one",
            target: "usuario",
            joinColumn: {
                name: "id_aluno",
                referencedColumnName: "id_usuario"
            },
            onDelete: "CASCADE"
        }
    }
})

export default aluno