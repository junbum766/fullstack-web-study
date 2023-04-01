const express = require("express");
const app = express();
const PORT = 3000;

// multer 미들웨어 사용허기
const multer = require("multer"); // multer 불러오기
const path = require("path"); // path 불러오기 (내장 모듈) => 파일, 폴더 경로를 쉽게 설정
// const upload = multer({
//   dest: "uploads/",
// });

const uploadDetail = multer({ // const upload 변수 대신 사용 가능
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      // Date.now() => 1970년 1월 1일 0시 0분 0초 기준
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "uploads"));

app.get("/", (req, res) => {
  res.render("index");
});

// single() : 하나의 파일 업로드 할 때 사용, 매개변수 = input의 name과 일치
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file); // 업로드한 파일 정보
  console.log(req.body); // 폼에 입력한 정보
  res.send("upload 완료");
});

// array() : 여러 파일 제출
app.post("/upload/array", uploadDetail.array("userfile"), (req, res) => {
  console.log(req.files);
  console.log(req.body); 
  res.send("upload 완료");
});

// fields() : 여러파일 각각 제출
app.post("/upload/fields", uploadDetail.fields([{name: "userfile1"}, {name: "userfile2"}]), (req, res) => {
  console.log(req.files);
  console.log(req.body); 
  res.send("upload 완료");
});

// dynamic 제출
app.post("/upload/dynamic", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.files);
  console.log(req.body); 
  res.send("upload 완료");
});
dynamic

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
