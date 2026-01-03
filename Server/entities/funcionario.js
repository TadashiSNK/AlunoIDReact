import { EntitySchema } from "typeorm";
import usuario from "./usuario.js";

const funcionario = new EntitySchema({
    name: "funcionario",
    tableName: "funcionario",
    columns: {
        id_funcionario: {type: "int", primary:true},
        cargo: {type: "varchar", length:255},
        setor: {type: "varchar", length:255},
        contrato: {type: "varchar", length:255},
        registro: {type: "varchar", length:255},
        data_admissao: {type: "timestamp", createDate: true}
    },

    relations: {
        usuario: {
            type: "one-to-one",
            target: usuario,
            joinColumn: {
                name: "id_funcionario",
                referencedColumnName: "id_usuario"
            },
            onDelete: "CASCADE"
        }
    }
})

export default funcionario