const express = require("express");
const app = express();
const PORT = 2500;

app.set("view engine", "ejs");

app.use("/views", express.static(__dirname + "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/practice_1", (req, res) => {
  res.render("practice_1");
});

app.get("/practice_2", (req, res) => {
  res.render("practice_2");
});

app.get("/getForm", function (req, res) {
  console.log(req.query);
  res.render('result', {title: '실습1 폼 전송 완료!', info: req.query})
});

app.post("/postForm", function (req, res) { 
  console.log(req.body);
  res.render('result', {title: '실습2 폼 전송 완료!', info: req.body})
});

app.listen(PORT, () => {
  console.log(PORT + " port가 연결되었습니다.");
});