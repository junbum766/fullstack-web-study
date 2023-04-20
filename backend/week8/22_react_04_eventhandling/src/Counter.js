import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const increase = () => {
    setNum(num + 1);
  };
  const alertMsg = (msg) => {
    alert(msg + "현재 숫자는 " + num + "입니다!");
  };
  const consoleMsg = (e, msg) => {
    console.log(e.target);
    console.log(msg + "현재 숫자는 " + num + "입니다!");
  };
  return (
    <>
      <div>숫자 카운터</div>
      <h1>{num}</h1>
      <button onClick={increase}>더하기</button>
      <button
        onClick={() => {
          alertMsg("hello!");
        }}
      >
        alert 띄우기
      </button>
      <button
        onClick={(e) => {
          consoleMsg(e, "hello!");
        }}
      >
        console 띄우기
      </button>
    </>
  );
};

export default Counter;
