// socket 사용을 위한 객체 생성
let socket = io.connect();

socket.on("connect", () => {
  console.log("⭕ Client Socket Connected >> ", socket.id);
});

function sayHello() {
  // client -> server 정보 보내기
  // socket.emit(event, data): 데이터 전송
  // => event 라는 이름으로 data 전송
  socket.emit("hello", { who: "client", msg: "hello" });

  // socket.on(event, callback): 데이터 받음
  // event에 대해서 정보를 받아 callback 함수 실행
  socket.on("hellokr", (data) => {
    console.log(`${data.who}: ${data.msg}`);
    document.querySelector(
      "#form-server"
    ).textContent = `${data.who}: ${data.msg}`;
  });
}

function sayStudy() {
  socket.emit("study", { who: "client", msg: "study" });
  socket.on("studykr", (data) => {
    console.log(`${data.who}: ${data.msg}`);
    document.querySelector(
      "#form-server"
    ).textContent = `${data.who}: ${data.msg}`;
  });
}

function sayBye() {
  socket.emit("bye", { who: "client", msg: "bye" });
  socket.on("byekr", (data) => {
    console.log(`${data.who}: ${data.msg}`);
    document.querySelector(
      "#form-server"
    ).textContent = `${data.who}: ${data.msg}`;
  });
}

function enterkey() {
  if (window.event.keyCode == 13) {
    chatSubmit();
  }
}

function chatSubmit() {
  console.log("제출");
  socket.emit("chat", { who: "hong", msg: "hi" });
  socket.on("chat", (data) => {
    console.log("클라이언트 >>> ", `${data.who}: ${data.msg}`);
    const input = document.querySelector("#chat-input").value;
    trimedInput = input.trim();
    if (trimedInput !== "") {
      const chatBox = `<div class='chatR'>${input}</div>`;

      document
        .querySelector(".chat-box")
        .insertAdjacentHTML("beforeend", chatBox);
      document.querySelector("#chat-input").value = "";
    }
  });

  document.querySelector(".chat-box").scrollTop =
    document.querySelector(".chat-box").scrollHeight; // 스크롤 자동 다운
}