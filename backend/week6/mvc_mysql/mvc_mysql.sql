-- Active: 1680508105393@@127.0.0.1@3306
SHOW databases;
USE test;
DROP TABLE IF EXISTS visitor;
CREATE TABLE visitor (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

INSERT INTO visitor (name, comment) VALUES ('홍길동', '내가 왔다.');
INSERT INTO visitor (name, comment) VALUES ('이찬혁', '으라챠챠');

DESC visitor;
SELECT * FROM visitor;