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

exports.toSignin;
exports.infoEdit;
exports.infoDelete;
exports.searchUser;
