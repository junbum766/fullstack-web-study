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

-- user 목록 확인
SELECT * FROM mysql.user;
-- user 생성
CREATE USER 'user'@'%' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
-- 비밀번호 바꾸기
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

select host, user from user;