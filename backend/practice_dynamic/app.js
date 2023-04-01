const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use("/views", express.static(__dirname + "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const realId = "hong";
const realPw = "1234";

app.get("/", (req, res) => {
  res.render("dynamic");
});

app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log(req.body);
  let result;
  if (req.body.id == realId && req.body.pw == realPw) {
    result = true;
  }
  res.send(result);
});

app.listen(PORT, () => {
  console.log(PORT + "port 가 연결되었습니다.");
  console.log("접속 : http://localhost:" + PORT);
});
