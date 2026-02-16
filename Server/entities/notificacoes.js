import { EntitySchema } from "typeorm";

const notificacoes = new EntitySchema({
    name: "notificacoes",
    tableName: "notificacoes",
    columns: {
        id_notificacao: {type:"int", primary: true},
        data_criado: {type:"date", nullable: true},
        icone_img: {type:"varchar", length: 50, nullable:true},
        titulo: {type:"varchar", length: 255},
        conteudo: {type:"varchar", length: 255},
    }
})

export default notificacoes