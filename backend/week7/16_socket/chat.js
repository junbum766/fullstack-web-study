const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  console.log("client connected");
  res.render("chat");
});

io.on("connection", (socket) => {
  // 'connection' 이벤트
  // - 클라이언트가 접속했을 때 발생하는 이벤트
  // - 콜백으로 socket 객체를 제공
  // socket.id : 소켓의 고유 아이디 -> socket은 앱 페이지별로 id 생성
  console.log("⭕ Server Socket Connected >>> ", socket.id);

  // [실습1]
  socket.on("hello", (data) => {
    console.log(`${data.who}: ${data.msg}`);
    // server -> client
    socket.emit("hellokr", { who: "server", msg: "안녕!" });
  });

  socket.on("study", (data) => {
    console.log(`${data.who}: ${data.msg}`);
    // server -> client
    socket.emit("studykr", { who: "server", msg: "공부해!" });
  });

  socket.on("bye", (data) => {
    console.log(`${data.who}: ${data.msg}`);
    // server -> client
    socket.emit("byekr", { who: "server", msg: "빠이!" });
  });

  // [실습2]
  socket.on("chat", (data) => {
    console.log("서버 >>> ", `${data.who}: ${data.msg}`);
    socket.emit("chat", { who: "hong", msg: "hi" });
  });
});

// 주의) socket 을 사용할 때는 http.listen 으로 PORT를 열어야 함
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
