const express = require("express");
const app = express();
const PORT = 2000;

app.set("view engine", "ejs");

app.use("/views", express.static(__dirname + "/views"));

app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든형삭의 데아터를 parsing
app.use(express.json()); // json 형태로 데이터를 주고 받음

app.get("/", (req, res) => {
  const myTitle = "폼 실습을 해보자!";
  res.render("index", { title: myTitle, name: "hong" });
});

app.listen(PORT, () => {
  console.log(PORT + " port가 연결되었습니다.");
});

app.get("/getForm", function (req, res) { // 웹에 아이디 비번이 표시됨..
  console.log(req.query);
  // res.send("get 요청 성공!");
  res.render('result', {title: 'GET 요청 폼 결과 확인하기', id: Object.values(req.query)[0], pw: Object.values(req.query)[1]})
  // req.query.id 이러기만 하면 됨..
});

app.post("/postForm", function (req, res) { // 웹에 아이디 비번을 가려줌
  console.log(req.body);
  // console.log(req)
  // res.send("post 요청 성공!");
  res.render('result', {title: 'POST 요청 폼 결과 확인하기', id: Object.values(req.body)[0], pw: Object.values(req.body)[1]})
});
