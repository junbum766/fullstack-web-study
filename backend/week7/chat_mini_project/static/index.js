let socket = io.connect();

let myNick;

socket.on("connect", () => {
  console.log("⭕ Client Socket Connected >> ", socket.id);
});

function enterkey() {
  if (window.event.keyCode == 13) {
    chatSubmit();
  }
}

function chatSubmit() {
  const input = document.querySelector("#chat-input").value;
  const to = document.querySelector("#nick-list").value;
  const mode = document.querySelector("#mode").value;

  trimedInput = input.trim();
  if (trimedInput !== "") {
    socket.emit("chat", { input: input, myNick: myNick, to: to });
    document.querySelector("#chat-input").value = "";
    console.log("인풋 체크...", input);

    // 게임 모드인 경우
    if (mode === "game") {
      socket.emit("gameOn", input);
    }
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

///////// 끝말잇기

// mode == game 선택시 게임 참여 요청
function modeChange() {
  const mode = document.querySelector("#mode").value;
  console.log("select 클릭 수 측정...");
  if (mode === "game") {
    socket.emit("toGame");
  } else if (mode === "chat") {
    // chat으로 바꾸면 나가지고, 한명이라도 나갈 시 게임 폭파!
    socket.emit("returnToChat", myNick);
  }
}

// 참여 여부 물어보기
socket.on("gameConfirm", (msg) => {
  console.log("게임 입장?");
  let conf = confirm(msg);
  if (conf) {
    document.querySelector("#mode").options[1].selected = true; // 모든 참여자 옵션을 끝말잇기로 바꿔줌(의미는 없음)
    document
      .querySelector(".chat-box")
      .setAttribute("style", "background-color: pink"); // 배경도 바꿔줌

    socket.emit("gameEntry", myNick);

    // socket.on("gameEntrySuccess", (nick) => {
    //   // 모든 채팅방에 입장을 알림
    //   document
    //     .querySelector(".chat-box")
    //     .insertAdjacentHTML(
    //       "beforeend",
    //       `<div class='entAlert'>${nick}님이 게임에 참여하셨습니다.</div>`
    //     ); // 채팅방에 게임 참여를 알림
    // });
    socket.emit("gameReady", { opinion: "yes", myNick: myNick }); // 참여 의사
  } else {
    socket.emit("gameReady", { opinion: "no", myNick: myNick }); // 불참 의사
  }
});

// 게임 시작 대기 공지
socket.on("waitGame", (data) => {
  if (data.nick == myNick) {
    document.querySelector(".chat-box").insertAdjacentHTML(
      "beforeend",
      `
      <div class='loading-msg'>
        ${data.msg}
      </div>
      <div class='loading-box'>
        <div class='loading'></div>
      </div>
      `
    );
    document.querySelector(".chat-box").scrollTop =
      document.querySelector(".chat-box").scrollHeight; // 스크롤 자동 다운

    document.querySelector("#chat-input").disabled = true;
    document.querySelector("#chat-btn").disabled = true;
  }
});

// 게임 시작 공지
socket.on("gameStart", (data) => {
  alert(`총 ${data.yesCnt}명이 참가하였습니다.`);
  alert(
    `이번 게임의 제시어는 '${data.startWord}' 입니다\n지금 바로 시작하세요!`
  );
  // 대기 요소 모두 풀어줌
  if (document.querySelector(".loading") != null) {
    document.querySelector(".loading").remove();
    document.querySelector(".loading-msg").remove();
    document.querySelector("#chat-input").disabled = false;
    document.querySelector("#chat-btn").disabled = false;
  }
});
// 게임 중, 단어 검사
socket.on("wordCheck", (words) => {
  // words.pastWord : 이전 단어, words.recentWord : 현재 단어
  console.log("sendWords 몇번 통과?", words);

  let thisUrl = `https://stdict.korean.go.kr/api/search.do?&key=B57FCC9C9D19F96B18E55D7B21F8B434&req_type=json&advanced=y&pos=1&type_search=search&q=${words.recentWord}`;

  axios({
    method: 'GET',
    url: thisUrl,
  })
    .then((response) => {
      console.log(response);
      if (response.ok) return response.json();
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      console.log(
        "단어 체크...",
        words.pastWord.slice(-1),
        words.recentWord.slice(0, 1)
      );
      if (data.channel == undefined) {
        // 패배 시나리오 1) 표준어 x
        alert(`${words.recentWord} 은 표준어가 아닙니다!`);
        socket.emit("lose", myNick);
      } else if (words.pastWord.slice(-1) != words.recentWord.slice(0, 1)) {
        // 패배 시나리오 2) 첫자가 앞에 마지막자와 다르면 패배
        socket.emit("lose", myNick);
      } else {
        // 성공 시나리오) list에 단어를 저장 후 단어를 넘겨줌
        socket.emit("nextWord", { input: words.recentWord, myNick: myNick });
      }
    })
    .catch((err) => {
      console.log("api 요청 오류", err);
    });
});

// 다음 단어가 뭘로 시작해야 하는지 공지
socket.on("nextWordAlert", (data) => {
  if (data.sender !== myNick) {
    alert(data.msg);
  }
});

// 게임 퇴장 알림
socket.on("gameDisconnection", (msg) => {
  alert(msg);
  document.querySelector("#mode").options[0].selected = true;
  document
    .querySelector(".chat-box")
    .setAttribute("style", "background-color: skyblue");
  if (document.querySelector(".loading") != null) {
    document.querySelector(".loading").remove();
    document.querySelector(".loading-msg").remove();
    document.querySelector("#chat-input").disabled = false;
    document.querySelector("#chat-btn").disabled = false;
  }
});

// 이미 말한 단어 패배 추가
// 30 번 줄이 간헐적으로 두번씩 출력됨......
