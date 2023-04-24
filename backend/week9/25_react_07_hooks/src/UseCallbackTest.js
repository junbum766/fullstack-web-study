import { useState, useCallback } from "react";

function UseCallbackTest() {
  const [text, setText] = useState("");

  // useCallback() : 반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸주면 함수를 기억해서 컴포넌트가 재랜더링 되어도 기억된 것을 그대로 사용
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  
  return (
    <>
      <h1>useCallbackTest hook</h1>
      <input onChange={onChangeText} />

      <h2>작성한 값: {text || '없음'}</h2>
    </>
  );
}

export default UseCallbackTest;