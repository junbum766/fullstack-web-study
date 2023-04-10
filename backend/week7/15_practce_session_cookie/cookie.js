const express = require("express");
const app = express();
const PORT = 1234;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cookieParser = require("cookie-parser"); // req.cookie 가능해짐

app.use(cookieParser());


const cookieConfing = {
  httpOnly: true, // 웹 서버를 통해서만 쿠키 접근 가능
  maxAge: 5 * 1000, // 쿠키 수명 (ms 단위)
};

app.get("/", (req, res) => {
  console.log('쿠키 확인...', req.cookies.popup1);
  if (req.cookies.popup1 != undefined) {
    res.render('index', {cookie: true});
  } else {
    res.render("index", {cookie: false});}
});

app.get("/setCookie", (req, res) => {
  res.cookie("popup1", "popup 오늘 하루 보지 않음", cookieConfing);
  res.send("쿠키 설정 완료!!");
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

