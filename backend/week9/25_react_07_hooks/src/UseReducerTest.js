import { useReducer } from "react";

const reducer = (prevNumber, action) => {
  // prevNumber : 현재 state
  // action : dispatch 에서 인자로 받고 있는 현재 액션 값
  switch (action.type) {
    case "INCREMENT":
      return { value: prevNumber.value + 1 };
    case "DECREMENT":
      return { value: prevNumber.value - 1 };
    case "RESET":
      return { value: 0 };
    default:
      return { value: prevNumber.value };
  }
};

function UseReducerTest() {
  const [number, dispatch] = useReducer(reducer, { value: 0 });

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <h1>useReducer hook</h1>
      <h2>{number.value}</h2>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>하락</button>
      <button onClick={reset}>리셋</button>
    </>
  );
}

export default UseReducerTest;
