// 부모 컴포넌트2
import { useState } from "react";
import LifeCycleFuncChild from "./LifeCycleFuncChild";

function LifeCycleFunc() {
  const [number, setNumber] = useState(5);
  const [visible, setVisible] = useState(true);
  const changeVisible = () => {
    setVisible(!visible);
  };
  const increaseNum = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <button onClick={increaseNum}>PLUS</button>
      <button onClick={changeVisible}>ON/OFF</button>
      {visible && <LifeCycleFuncChild num={number}/>}
    </>
  );
}

export default LifeCycleFunc;
