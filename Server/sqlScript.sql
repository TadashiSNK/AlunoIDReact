create database ALUNOIDBD;
drop database ALUNOIDBD;
use ALUNOIDBD;
show tables;

desc entrada_saida;
desc usuario;
desc anotacoes;
desc notificacoes;

select * from usuario;


create table usuario(
	id_usuario INT PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    cep VARCHAR(15) NOT NULL,
    numero_casa VARCHAR(10) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    escola VARCHAR(255),
    usuario_ativo BOOLEAN NOT NULL,
    tipo_de_usuario ENUM('Admin', 'Aluno', 'Responsavel', 'Professor') NOT NULL DEFAULT 'Aluno',
    em_aula BOOLEAN NOT NULL,
    carteirinhaHash varchar(255) UNIQUE
);

create table 


################################
drop table usuario;
select * from usuario;
INSERT INTO usuario (nome, cpf, email, cep, numero_casa, senha, usuario_ativo, em_aula) VALUES ('João Silva', '12345678901', 'joao@email.com', '12345-678', '12A', 'senha123', TRUE, FALSE);
INSERT INTO usuario (nome, cpf, email, cep, numero_casa, senha, usuario_ativo, em_aula) VALUES ('Lucas Tadashi', '12345678901', 'lucas@email.com', '12345-678', '12A', '123', TRUE, FALSE);
################################


create table entrada_saida(
	id_usuario INT,
    data_atual DATE DEFAULT NULL,
    hora_entrada TIME DEFAULT NULL,
    hora_saida TIME DEFAULT NULL,

    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);


################################
insert into entrada_saida(id_usuario) values(0);
select * from entrada_saida;
drop table entrada_saida;
################################


create table notas(
	
);

create table anotacoes(
	id_usuario INT,
    anotacao_id INT NOT NULL PRIMARY KEY,
    titulo_anotacao VARCHAR(255) DEFAULT 'Nota Sem Título',
    conteudo_anotacao TEXT,
    cor CHAR(7) DEFAULT('#808080'),
    
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

################################
select * from anotacoes;
INSERT INTO anotacoes (id_usuario, conteudo_anotacao) VALUES (0, 'Esta é a minha primeira anotação.');
drop table anotacoes;
################################


create table notificacoes(
	id_notificacao INT PRIMARY KEY,
    data_criado DATE DEFAULT NULL,
    icone_img VARCHAR(255),
    titulo VARCHAR(255),
    conteudo_notificacao VARCHAR(255)
    
);

################################
select * from notificacoes;

drop table notificacoes;
################################




drop table usuario;
select * from usuario;

