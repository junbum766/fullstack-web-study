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

// 닉네임 저장할 객체
// : 닉네임이 겹치지 않도록 객체를 사용함
// : {socket_id : nickname, ...}
const nickObj = {};

// 닉네임 리스트 객체 업데이트(유저가 들어가거나 나왔을 때)
function updateNicList() {
  io.emit("updateNicks", nickObj);
  // 서버에 접속한 클라이언트들에게 nickObj에 변경이 일어났음을 알리는 이벤트
}

io.on("connection", (socket) => {
  // 'connection' 이벤트
  // - 클라이언트가 접속했을 때 발생하는 이벤트
  // - 콜백으로 socket 객체를 제공
  // socket.id : 소켓의 고유 아이디 -> socket은 앱 페이지별로 id 생성
  console.log("⭕ Server Socket Connected >>> ", socket.id);

  // [실습1]
  // socket.on("hello", (data) => {
  //   console.log(`${data.who}: ${data.msg}`);
  //   // server -> client
  //   socket.emit("hellokr", { who: "server", msg: "안녕!" });
  // });

  // socket.on("study", (data) => {
  //   console.log(`${data.who}: ${data.msg}`);
  //   // server -> client
  //   socket.emit("studykr", { who: "server", msg: "공부해!" });
  // });

  // socket.on("bye", (data) => {
  //   console.log(`${data.who}: ${data.msg}`);
  //   // server -> client
  //   socket.emit("byekr", { who: "server", msg: "빠이!" });
  // });

  // [실습2, 4]
  socket.on("chat", (data) => {
    const sendData = {
      nick: data.myNick,
      msg: data.input,
      to: data.to,
      obj: nickObj,
    };
    console.log("check....", data);
    if (data.to === "all") {
      console.log("all >>>", data.to, "에게 <<<");
      io.emit("ioChat", sendData);
    } else {
      console.log("direct >>>", data.to, "에게 <<<");
      io.to(data.to).emit("ioChat", sendData);
      socket.emit("ioChat", sendData); // io.to 는 목적지에만 가기 때문에, 나 자신의 채팅 창에도 반영하기 위해서 socket.emit을 추가한다.
    }
  });

  // [실습3] 채팅창 입장 안내
  // io.emit("notice", `${socket.id.slice(0, 5)}님이 입장하셨습니다.`);

  // [실습 3-2] 닉네임 셋팅
  socket.on("setNick", (nickname) => {
    if (Object.values(nickObj).indexOf(nickname) > -1) {
      // id 중복
      console.log(nickObj);
      socket.emit("error", "이미 존재하는 아이디 입니다. 다시 입력해 주세요!");
    } else {
      nickObj[socket.id] = nickname;
      io.emit("notice", `${nickname}님이 입장하셨습니다.`); // 입장 알림
      socket.emit("entrySuccess", nickname); // 입장 성공시 이벤트
      console.log(nickObj);
      updateNicList(); // nickObj 업데이트 알림
    }
  });

  // [실습 3-3] 퇴장 : emit하는 코드는 없지만 창을 닫는 이벤트를 받음
  socket.on("disconnect", () => {
    console.log("❌ Server Socket Disconneted >> ", socket.id);
    io.emit("notice", `${nickObj[socket.id]}님이 퇴장하셨습니다.`);
    delete nickObj[socket.id];
    updateNicList(); // nickObj 업데이트 알림
    console.log(nickObj);
  });
});

// 주의) socket 을 사용할 때는 http.listen 으로 PORT를 열어야 함
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
