// socket 사용을 위한 객체 생성
let socket = io.connect();

// 닉네임 셋팅
let myNick;

socket.on("connect", () => {
  console.log("⭕ Client Socket Connected >> ", socket.id);
});
// [실습1]
// function sayHello() {
//   // client -> server 정보 보내기
//   // socket.emit(event, data): 데이터 전송
//   // => event 라는 이름으로 data 전송
//   socket.emit("hello", { who: "client", msg: "hello" });

//   // socket.on(event, callback): 데이터 받음
//   // event에 대해서 정보를 받아 callback 함수 실행
//   socket.on("hellokr", (data) => {
//     console.log(`${data.who}: ${data.msg}`);
//     document.querySelector(
//       "#form-server"
//     ).textContent = `${data.who}: ${data.msg}`;
//   });
// }

// function sayStudy() {
//   socket.emit("study", { who: "client", msg: "study" });
//   socket.on("studykr", (data) => {
//     console.log(`${data.who}: ${data.msg}`);
//     document.querySelector(
//       "#form-server"
//     ).textContent = `${data.who}: ${data.msg}`;
//   });
// }

// function sayBye() {
//   socket.emit("bye", { who: "client", msg: "bye" });
//   socket.on("byekr", (data) => {
//     console.log(`${data.who}: ${data.msg}`);
//     document.querySelector(
//       "#form-server"
//     ).textContent = `${data.who}: ${data.msg}`;
//   });
// }

// [실습2, 4]
function enterkey() {
  if (window.event.keyCode == 13) {
    chatSubmit();
  }
}

function chatSubmit() {
  const input = document.querySelector("#chat-input").value;
  const to = document.querySelector("#nick-list").value;
  trimedInput = input.trim();
  if (trimedInput !== "") {
    socket.emit("chat", { input: input, myNick: myNick, to: to });
    document.querySelector("#chat-input").value = "";
  }
}

socket.on("ioChat", (data) => {
  // 상대방 채팅창에 반영
  if (myNick != data.nick && data.to == "all") {
    const chatBox = `<div class='chatL'>${data.nick}: ${data.msg}</div>`;
    document
      .querySelector(".chat-box")
      .insertAdjacentHTML("beforeend", chatBox);
  } else if (myNick != data.nick && data.to != "all") {
    const chatBox = `<div class='chatL-dir'>(direct from ${data.nick}) ${data.msg}</div>`;
    document
      .querySelector(".chat-box")
      .insertAdjacentHTML("beforeend", chatBox);
  }
  // 내 채팅창에 반영
  if (myNick == data.nick && data.to == "all") {
    const chatBox = `<div class='chatR'>${data.msg} :나</div>`;
    document
      .querySelector(".chat-box")
      .insertAdjacentHTML("beforeend", chatBox);
  } else if (myNick == data.nick && data.to != "all") {
    const chatBox = `<div class='chatR-dir'>${data.msg} :나(direct to ${
      data.obj[data.to]
    })</div>`;
    document
      .querySelector(".chat-box")
      .insertAdjacentHTML("beforeend", chatBox);
  }

  document.querySelector(".chat-box").scrollTop =
    document.querySelector(".chat-box").scrollHeight; // 스크롤 자동 다운
});

// [실습3] 채팅창 입장 안내
socket.on("notice", (msg) => {
  document
    .querySelector(".chat-box")
    .insertAdjacentHTML("beforeend", `<div class='notice'>${msg}</div>`);
});

// [실습 3-2] 닉네임 셋팅
function entry() {
  socket.emit("setNick", document.querySelector("#nickname").value);
}

socket.on("entrySuccess", (nickname) => {
  // 닉네임 설정
  myNick = nickname;

  // 채팅 박스 나타나게
  document.querySelector(".container").classList.remove("d-none");

  // 닉네임 인풋, 버튼 비활성화
  document.querySelector("#nickname").disabled = true;
  document.querySelector("#nickname-btn").disabled = true;
});

socket.on("error", (msg) => {
  alert(msg);
  document.querySelector("#nickname").value = "";
});

// 유저 목록 업데이트
socket.on("updateNicks", (obj) => {
  let options = '<option value="all">전체</option>';
  // select#nick-list 요소 옵션 추가
  for (let key in obj) {
    options += `<option value="${key}">${obj[key]}</option>`;
  }
  // select 요소에 options 덮어쓰기
  document.querySelector("#nick-list").innerHTML = options;
});
