/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class Db1760974264672 {
    name = 'Db1760974264672'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`usuario\` (\`id_usuario\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`cpf\` varchar(11) NOT NULL, \`email\` varchar(255) NOT NULL, \`cep\` varchar(15) NOT NULL, \`numero_casa\` varchar(10) NOT NULL, \`senha\` varchar(255) NOT NULL, \`escola\` varchar(255) NOT NULL, \`usuario_ativo\` tinyint NOT NULL, \`em_aula\` tinyint NOT NULL, \`tipo_usuario\` enum ('Admin', 'Aluno', 'Responsavel', 'Professor') NOT NULL DEFAULT 'Aluno', \`carteirinhaHash\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_28cd8597e57c8197d4929a98e7\` (\`cpf\`), UNIQUE INDEX \`IDX_2863682842e688ca198eb25c12\` (\`email\`), UNIQUE INDEX \`IDX_c0b0457e545a3b69da1a7247ed\` (\`carteirinhaHash\`), PRIMARY KEY (\`id_usuario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`notificacoes\` (\`id_notificacao\` int NOT NULL, \`data_criado\` date NULL, \`icone_img\` varchar(50) NULL, \`titulo\` varchar(255) NOT NULL, \`conteudo\` varchar(255) NOT NULL, PRIMARY KEY (\`id_notificacao\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entrada_saida\` (\`id_registro\` int NOT NULL AUTO_INCREMENT, \`id_usuario\` int NOT NULL, \`data_atual\` date NOT NULL, \`hora_entrada\` time NOT NULL, \`hora_saida\` time NOT NULL, PRIMARY KEY (\`id_registro\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`anotacoes\` (\`anotacao_id\` int NOT NULL AUTO_INCREMENT, \`id_usuario\` int NOT NULL, \`titulo\` varchar(255) NOT NULL DEFAULT 'Nota Sem Título', \`conteudo\` text NOT NULL, \`cor\` char(7) NOT NULL DEFAULT '#808080', PRIMARY KEY (\`anotacao_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`entrada_saida\` ADD CONSTRAINT \`FK_7b3ecdaaf7a89325165d89c1846\` FOREIGN KEY (\`id_usuario\`) REFERENCES \`usuario\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`anotacoes\` ADD CONSTRAINT \`FK_056ac6e6fd958aae80a3bcf7a1a\` FOREIGN KEY (\`id_usuario\`) REFERENCES \`usuario\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`anotacoes\` DROP FOREIGN KEY \`FK_056ac6e6fd958aae80a3bcf7a1a\``);
        await queryRunner.query(`ALTER TABLE \`entrada_saida\` DROP FOREIGN KEY \`FK_7b3ecdaaf7a89325165d89c1846\``);
        await queryRunner.query(`DROP TABLE \`anotacoes\``);
        await queryRunner.query(`DROP TABLE \`entrada_saida\``);
        await queryRunner.query(`DROP TABLE \`notificacoes\``);
        await queryRunner.query(`DROP INDEX \`IDX_c0b0457e545a3b69da1a7247ed\` ON \`usuario\``);
        await queryRunner.query(`DROP INDEX \`IDX_2863682842e688ca198eb25c12\` ON \`usuario\``);
        await queryRunner.query(`DROP INDEX \`IDX_28cd8597e57c8197d4929a98e7\` ON \`usuario\``);
        await queryRunner.query(`DROP TABLE \`usuario\``);
    }
}
