-- Active: 1680508105393@@127.0.0.1@3306
CREATE DATABASE test DEFAULT CHARACTER SET UTF8 DEFAULT COLLATE UTF8_GENERAL_CI;

USE test; 

CREATE TABLE student (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT,
    birthday DATE NOT NULL
);

SHOW DATABASES; -- table 조회
DESC student; -- student table 내부 구조 조회


ALTER TABLE student ADD age INT NOT NULL;
ALTER TABLE student MODIFY age VARCHAR(10) NOT NULL;
ALTER TABLE student DROP COLUMN age;
DROP TABLE IF EXISTS student;



-- practice 1, 2
CREATE TABLE member (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(5) DEFAULT 'x'
);

ALTER TABLE member DROP COLUMN age;
ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member ADD interest VARCHAR(100) ;

-- CLass 2
INSERT INTO student (id, name, birthday) VALUES ('sarah123', 'sarah', '2023-04-03');
INSERT INTO student VALUES ('kim1234', 'kim', '10', '2014-01-01');
INSERT INTO student VALUES ('lee1234', 'lee', '20', '2004-01-01');
INSERT INTO student VALUES ('hong1234', 'hong', '15', '2009-01-01');
INSERT INTO student VALUES ('lim1234', 'lim', '40', '1985-01-01');
INSERT INTO student VALUES ('shim1234', 'shim', '25', '1999-01-01');

-- data 조회
SELECT * FROM student; -- 전체 조회
select id, name FROM student; -- 속성 선택 조회
select id FROM student WHERE name = 'kim'; -- where 조건 : 이름이 kim 인 사람의 id
SELECT * FROM student ORDER BY age ASC; -- 나이 오름차순 정리, 조회
SELECT * FROM student ORDER BY age DESC; -- 나이 내림차순 정리, 조회
SELECT * FROM student ORDER BY age DESC LIMIT 2; -- LIMIT : 위 2개만
SELECT * FROM student WHERE birthday <= '2010-01-01';
SELECT * FROM student WHERE name != 'kim';
SELECT * FROM student WHERE age BETWEEN 15 AND 25;
SELECT * FROM student WHERE name IN ('kim', 'lee');
SELECT * FROM student WHERE name LIKE '%im'; -- im이 포함된 모든 행
SELECT * FROM student WHERE name LIKE '_im'; -- im이 같고 앞에 한글자가 포함된 모든 행 (글자수 제약)

-- UPDATE
UPDATE student SET age = 7 WHERE name = 'kim';
DELETE FROM student WHERE id = 'shim1234';

-- practice 3
CREATE TABLE user (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE not NULL,
    age INT(3) NOT NULL DEFAULT 0
);

INSERT INTO user VALUES ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', '33');
INSERT INTO user VALUES ('sexysung', 'reagerg12', '성춘향', 'F', '1992-03-31', '31');
INSERT INTO user VALUES ('power70', 'gaerg123', '변사또', 'M', '1970-05-02', '53');
INSERT INTO user VALUES ('hanjo', '8o4bkg', '한조', 'M', '1984-10-18', '39');
INSERT INTO user VALUES ('widowmaker', 'rwgg123', '위도우', 'F', '1976-06-27', '47');
INSERT INTO user VALUES ('dvadva', 'htrhtrh55', '송하나', 'F', '2001-06-03', '22');
INSERT INTO user VALUES ('junkrat', 'werq1224', '정크랫', 'M', '1999-11-11', '24');
SELECT * FROM user ORDER BY birthday ASC;
SELECT * FROM user WHERE gender = 'M' ORDER BY name ASC;
SELECT id, name FROM user WHERE birthday LIKE '199%';
SELECT * FROM user WHERE birthday LIKE '%-06-%';
SELECT * FROM user WHERE gender = 'M' AND birthday LIKE '197%';
SELECT * FROM user ORDER BY age ASC LIMIT 3;
SELECT * FROM user WHERE age BETWEEN 25 and 50;
UPDATE user SET pw = 1234578 WHERE id = 'hong1234';
DELETE FROM user WHERE id = 'jungkrat';

-- 외래키 지정
DROP TABLE IF EXISTS class;
CREATE TABLE class (
    id int AUTO_INCREMENT PRIMARY KEY, -- AUTO_INCREMENT : 자동으로 1씩 증가하는 id를 만들어줄 수 있음
    class_name VARCHAR(20),
    student_id VARCHAR(20), -- 새로운 id 가 아니라 여기다가 primary key를 할당해줘도 된다.
    Foreign Key (student_id) REFERENCES student(id) ON UPDATE CASCADE ON DELETE CASCADE
); -- ON UPDATE CASCADE ON DELETE CASCADE : student(id) 가 바뀔때 여기도 자동으로 바뀌게

INSERT INTO class (class_name, student_id) VALUES ('database', 'kim1234');
SELECT * FROM class;
SELECT * FROM student;



CREATE TABLE todo (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    done TINYINT(1) NOT NULL DEFAULT 0
);