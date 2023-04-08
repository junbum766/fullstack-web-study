-- Active: 1680508105393@@127.0.0.1@3306
-- 데이터베이스 목록 확인
SHOW databases;

-- codingon 데이터베이스 선택
USE test;

-- codingon 데이터베이스의 테이블 목록 확인
SHOW tables;

-- 이미 user 테이블이 있다면 기존 테이블 지움
DROP TABLE IF EXISTS user;

-- TODO: user 데이터베이스 생성
CREATE TABLE user (
    userid VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    pw INT NOT NULL

);
-- user 데이블 데이터 추가
INSERT INTO user (userid, name, pw) VALUES ('sean', 'sean', '1234');
INSERT INTO user (userid, name, pw) VALUES ('test', 'test', '1234');
INSERT INTO user (userid, name, pw) VALUES ('apple', 'apple', '1234');
INSERT INTO user (userid, name, pw) VALUES ('hello', 'hello', '1234');

-- user 테이블 구조 보기
DESC user; 

-- user 테이블 데이터 조회
SELECT * FROM user;