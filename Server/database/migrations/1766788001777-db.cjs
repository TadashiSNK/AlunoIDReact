/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class Db1766788001777 {
    name = 'Db1766788001777'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`usuario\` (\`id_usuario\` int NOT NULL AUTO_INCREMENT, \`tipo_usuario\` enum ('Admin', 'Aluno', 'Responsavel Legal', 'Funcionario') NOT NULL DEFAULT 'Aluno', \`nome\` varchar(255) NOT NULL, \`data_nasc\` date NOT NULL, \`cpf\` varchar(11) NOT NULL, \`rg\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`senha\` varchar(255) NOT NULL, \`sexo\` enum ('H', 'M') NOT NULL, \`cep\` varchar(15) NOT NULL, \`numero_casa\` varchar(10) NOT NULL, \`complemento\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_28cd8597e57c8197d4929a98e7\` (\`cpf\`), UNIQUE INDEX \`IDX_2863682842e688ca198eb25c12\` (\`email\`), PRIMARY KEY (\`id_usuario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`aluno\` (\`id_aluno\` int NOT NULL, \`serie\` int NOT NULL, \`turma\` char(1) NOT NULL, \`modalidade_ensino\` varchar(255) NOT NULL, \`turno\` enum ('Manhã', 'Tarde', 'Noite') NOT NULL, \`necessidades_especiais\` tinyint NOT NULL DEFAULT 0, \`necessidades_desc\` text NOT NULL, PRIMARY KEY (\`id_aluno\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sala\` (\`id_sala\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`tipo\` varchar(255) NOT NULL, \`andar\` int NOT NULL, \`capacidade\` int NOT NULL, \`equipamentos\` text NOT NULL, \`tem_ar\` tinyint NOT NULL DEFAULT 0, \`tem_computador\` tinyint NOT NULL DEFAULT 0, \`tem_acessibilidade\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`id_sala\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`aluno\` ADD CONSTRAINT \`FK_8a2d97bc538f6b5804aad14ebda\` FOREIGN KEY (\`id_aluno\`) REFERENCES \`usuario\`(\`id_usuario\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`aluno\` DROP FOREIGN KEY \`FK_8a2d97bc538f6b5804aad14ebda\``);
        await queryRunner.query(`DROP TABLE \`sala\``);
        await queryRunner.query(`DROP TABLE \`aluno\``);
        await queryRunner.query(`DROP INDEX \`IDX_2863682842e688ca198eb25c12\` ON \`usuario\``);
        await queryRunner.query(`DROP INDEX \`IDX_28cd8597e57c8197d4929a98e7\` ON \`usuario\``);
        await queryRunner.query(`DROP TABLE \`usuario\``);
    }
}
