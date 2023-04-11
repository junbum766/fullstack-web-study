const express = require("express");
const app = express();
const PORT = 1234;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const session = require("express-session");
const dotenv = require("dotenv"); // 환경 변수를 파일에 저장해놓고 접근할 수 있게 하는 모듈

dotenv.config(); // process.env.xxx

// session({ 세션 모듈 옵션 })
// - secret : 세션을 발급할 때 사용되는 키
// - resave : 세션에 수정사항이 생기지 않더라도 매 요청마다 다시 저장할 건지
// - saveUnitialized : 세션에 저장할 내역이 없더라도 처음부터 세션 생성할지
// - secure : https 프로토콜에서만 세션을 주고 받을건지
app.use(
  session({
    secret: process.env.SECRET_KEY, // 필수 옵션(세션 암호화 할 때 쓰이는 키)
    resave: false,
    saveUninitialized: false, // 일반적으로 false 지정
  })
);
// 세션 설정 :
// req.session.키 = 값

// 세션 읽기 :
// req.session.키

// 세션 삭제 :
// req.session.destroy(callback 함수)

app.get("/", (req, res) => {
  res.render("session");
});

app.get('/set', (req, res) => {
    req.session.name = '홍길동';
    console.log(req.session)
    res.send('세션 설정 완료!!!')    
})

app.get('/name', (req, res) => {
    res.send({
        id: req.sessionID,
        name: req.session.name,
    })
})

app.get('/destroy', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            throw err;
        }
        res.send('세션 삭제 완료')
    })
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
