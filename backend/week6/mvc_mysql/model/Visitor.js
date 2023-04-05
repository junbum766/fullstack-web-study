// exports.getVisitors = () => {
//   return [
//     {
//       id: 1,
//       name: '홍길동',
//       comment: '내가 왔다.'
//     },
//     {
//       id: 2,
//       name: '이찬혁',
//       comment: '으라챠챠'
//     },
//   ];
// };

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "127.0.0.1", // database 가 설치된 ip 주소
  user: "user",
  password: "1234",
  database: "test",
});

exports.getVisitors = (callback) => {
  // conn.query(sql, callback) => conn 에 저장되에 있는 데이터베이스에 접근해서 sql문 실행,
  // 결과를 callback 함수에 넘겨줌
  const sql = "SELECT * FROM visitor";

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("Visitor.js >> ", rows);
    callback(rows);
  });
};
