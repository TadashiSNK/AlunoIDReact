import { EntitySchema } from "typeorm";

const sala = new EntitySchema({
    name: 'sala',
    tableName: 'sala',
    columns: {
        id_sala: {type: "int", primary:true, generated:true},
        nome: {type: "varchar", length: 255},
        tipo: {type: "varchar", length: 255},
        andar: {type: "int"},
        capacidade: {type: "int"},
        equipamentos: {type: "text"},
        tem_ar: {type: "boolean", default:false},
        tem_computador: {type: "boolean", default:false},
        tem_acessibilidade: {type: "boolean", default:false}
    }
})

export default sala

