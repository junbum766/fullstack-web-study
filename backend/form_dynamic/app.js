const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use("/views", express.static(__dirname + "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
  res.render("dynamic");
});

// 1-1. ajax get 요청
app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 1-2. ajax post 요청
app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// 2-1. axios get
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 2-2. axios post
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// 3-1. fetch get
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 3-2. fetch post
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(PORT + "port 가 연결되었습니다.");
  console.log('접속 : http://localhost:'+PORT);
});