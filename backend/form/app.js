const express = require("express");
const app = express();
const PORT = 1234;

app.set("view engine", "ejs");

app.use("/views", express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(PORT + " port가 연결되었습니다.");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
