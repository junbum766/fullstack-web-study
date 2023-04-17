const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = prcess.env.PORT || 5000;
const corsOptions = {
  origin: "https://stdict.korean.go.kr/api/search.do",
};

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(cors());

require("dotenv").config();

const apiURL = "https://stdict.korean.go.kr/api/search.do";

const getData = async (req) => {
  let res;
  try {
    res = await axios.get(apiURL, {
      params: {},
    });
  } catch (e) {
    console.log(e);
  }
  return res;
};

app.get("/", function (req, res) {
  console.log("client connected");
  res.render("chat");
});

const nickObj = {};
function updateNicList() {
  io.emit("updateNicks", nickObj);
}

const startWord = "사자";
let words = [startWord];
let yesCnt = 0;
let noCnt = 0;

io.on("connection", (socket) => {
  console.log("⭕ Server Socket Connected >>> ", socket.id);
  socket.on("chat", (data) => {
    const sendData = {
      nick: data.myNick,
      msg: data.input,
      to: data.to,
      obj: nickObj,
    };
    console.log("check....", data);
    if (data.to === "all") {
      io.emit("ioChat", sendData);
    } else {
      if (data.myNick !== nickObj[data.to]) {
        io.to(data.to).emit("ioChat", sendData);
      }
      socket.emit("ioChat", sendData);
    }
  });

  socket.on("setNick", (nickname) => {
    if (Object.values(nickObj).indexOf(nickname) > -1) {
      console.log(nickObj);
      socket.emit("error", "이미 존재하는 아이디 입니다. 다시 입력해 주세요!");
    } else {
      nickObj[socket.id] = nickname;
      io.emit("notice", `${nickname}님이 입장하셨습니다.`);
      socket.emit("entrySuccess", nickname);
      console.log(nickObj);
      updateNicList();
    }
  });

  socket.on("disconnect", () => {
    console.log("❌ Server Socket Disconneted >> ", socket.id);
    io.emit("notice", `${nickObj[socket.id]}님이 퇴장하셨습니다.`);
    delete nickObj[socket.id];
    updateNicList();
    console.log(nickObj);
  });

  ////// 끝말잇기

  // 한명이 게임 참여 버튼 클릭시 다른 참여자들에게 참여할건지 요청
  socket.on("toGame", () => {
    const msg = "끝말잇기 게임에 참여하겠습니까?";
    io.emit("gameConfirm", msg);
  });

  // 게임 입장 공지
  // socket.on("gameEntry", (nick) => {
  //   io.emit("gameEntrySuccess", nick);
  // });

  // 참여자 기다렸다가 모이면 시작
  socket.on("gameReady", (data) => {
    if (data.opinion === "yes") {
      yesCnt += 1;
    } else {
      noCnt += 1;
    }
    console.log("유저 수 >>> ", yesCnt, noCnt, Object.values(nickObj).length);
    if (yesCnt + noCnt == Object.values(nickObj).length) {
      // 사람이 다 차면 다음 동작
      if (yesCnt == 0 || yesCnt == 1) {
        // 방 폭파 이유1
        const msg = `${yesCnt}명 밖에 참여하지 않아서 게임을 진행할 수 없습니다.`;
        io.emit("gameDisconnection", msg);
        yesCnt = 0; // 리셋
        noCnt = 0;
      } else {
        // 2명이상 있으면 시작
        io.emit("gameStart", { yesCnt: yesCnt, startWord: startWord });
      }
    } else {
      // 사람이 아직 다 안차면
      const msg = `참가자를 기다리고 있습니다.\n잠시만 기다려 주십쇼.`;
      io.emit("waitGame", { msg: msg, nick: data.myNick });
    }
  });

  // 게임 모드인 경우에 단어 검사, 게임 진행
  socket.on("gameOn", (word) => {
    words.push(word); // 단어 리스트에 응답 단어 추가
    console.log("단어 리스트 >>> ", words);
    socket.emit("wordCheck", {
      pastWord: words[words.length - 2],
      recentWord: words[words.length - 1],
    }); // words[-1]와 words[-2] 비교
  });

  // 다음 단어가 무슨 자로 시작해야 하는지 공지
  socket.on("nextWord", (data) => {
    const msg = `${data.input.slice(-1)} 다음에 올 단어를 써주세요`;
    io.emit("nextWordAlert", { msg: msg, sender: data.myNick });
  });

  // 패배 메세지 알림, 패배시 종료 (방 폭파 이유2)
  socket.on("lose", (loseNick) => {
    const msg = `${loseNick}님께서 패배하셨습니다!`;
    words = [startWord]; // 단어 리스트 리셋
    yesCnt = 0; // cnt 리셋
    noCnt = 0;
    io.emit("gameDisconnection", msg);
  });

  // 채팅방으로 돌아옴
  socket.on("returnToChat", (nick) => {
    const msg = `${nick}님이 게임에서 퇴장하셨습니다.\n게임을 폭파합니다.`; // 방 폭파 이유3
    words = [startWord];
    yesCnt = 0;
    noCnt = 0;
    io.emit("gameDisconnection", msg);
  });
});

http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
