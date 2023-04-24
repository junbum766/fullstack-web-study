import { useState, useMemo, useEffect } from "react";

// 평균값 계산 함수
// input 내용을 수정할 때도 getAverage 함수가 호출되어 비효율적임 => useMemo 사용!!
const getAverage = (numbers) => {
  console.log("평균값 계산중...");
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((a, b) => a + b); // 배열 원소의 합

  return sum / numbers.length;
};

function UseMemoTest() {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = () => {
    if (number !== "") {
      const newList = list.concat(parseInt(number));
      setList(newList);
      setNumber("");
    }
  };
  const enter = (e) => {
    if (e.key == "Enter") {
      onInsert();
    }
  };

  // useMemo : 수행한 연산의 결과 값을 기억함으로써 계산을 최소화함
  const avg = useMemo(() => {
    return getAverage(list);
  }, [list]);
  // useEffect 내맘대로 => 안된
  //   const avg_effect = useEffect(() => {
  //     const a = getAverage(list);
  //   }, [list]);
  return (
    <>
      <h1>useMemo hook</h1>

      <input
        type="number"
        value={number}
        onChange={onChange}
        onKeyDown={enter}
        autoFocus
      />
      <button onClick={onInsert}>둥록</button>

      <ul>
        {list.map((li, idx) => {
          return <li key={idx}>{li}</li>;
        })}
      </ul>
      <h2>평균 = {avg}</h2>
    </>
  );
}

export default UseMemoTest;
