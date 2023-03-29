const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 1234;

app.set("view engine", "ejs");

app.set("/views", "views");

app.get("/", (req, res) => {
  res.render("test");
});

app.get("/red", (req, res) => {
  res.render("red");
});

app.get("/orange", (req, res) => {
  res.render("orange");
});

app.get("/yellow", (req, res) => {
  res.render("yellow");
});

app.listen(PORT, () => {
  console.log(PORT + " port가 연결되었습니다.");
});