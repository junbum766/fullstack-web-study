// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "user",
  password: "1234",
  database: "test",
});

exports.createUser = (data, cb) => {
  const sql = `insert into user(userid, name, pw) values('${data.id}', '${data.name}', '${data.pw}');`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    cb(rows);
  });
};

exports.toProfile = (userid, cb) => {
  const sql = `select * from user where userid='${userid}'`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    cb(rows);
  });
};

exports.infoEdit = (data, cb) => {
  const sql = `update user set name='${data.name}', pw='${data.pw}' where userid='${data.id}'`;
  conn.query(sql, (err) => {
    if (err) {
      throw err;
    }
    cb(true);
  });
};

exports.infoDelete = (userid, cb) => {
  console.log('삭제할 id: ', userid)
  const sql = `delete from user where userid='${userid}'`;
  conn.query(sql, (err) => {
    if (err) {
      throw err;
    }
    cb(true);
  });
};

exports.searchUser = (data, cb) => {
  const sql = "select * from user";
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    cb(rows);
  });
};
