const express = require("express");
const app = express();
const PORT = 3000;

// multer 미들웨어 사용허기
const multer = require("multer"); // multer 불러오기
const path = require("path"); // path 불러오기 (내장 모듈) => 파일, 폴더 경로를 쉽게 설정
const upload = multer({
  dest: "uploads/",
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "uploads"));

app.get("/", (req, res) => {
  res.render("index");
});

// single() : 하나의 파일 업로드 할 때 사용
// single()의 매개변수 = input의 name과 일치
app.post("/upload", upload.single("userfile"), (req, res) => {
  console.log(req.file) // 업로드한 파일 정보
  console.log(req.body) // 폼에 입력한 정보
  res.send("upload 완료");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
