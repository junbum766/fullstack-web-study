const express = require("express");
const app = express();
const PORT = 1235;

const multer = require("multer");
const path = require("path");

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, req.body.id + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.render("result", { file: req.file, body: req.body });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
