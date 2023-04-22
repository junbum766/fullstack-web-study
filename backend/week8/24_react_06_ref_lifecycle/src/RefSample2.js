import { useRef } from "react";


function RefSample2() {
  // 1. useRef() 를 이용해서 로컬 변수 만들기
  const id = useRef(1);

  const plusId = () => {
    // id 값 증가
    id.current++;
    // 콘솔 찍기
    console.log(id);
  };
  return (
    <>
      <h1>{id.current}</h1>
      {/* 다시 렌더링 해주지 않아서 반영이 안된다. 잘 안쓰임.*/}
      <button onClick={plusId}>plus ref</button>
    </>
  );
}

export default RefSample2;
