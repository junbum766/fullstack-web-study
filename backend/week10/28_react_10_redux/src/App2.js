import { useState } from "react";
import "./styles/Box.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const number = useSelector((state) => state.number);
  return (
    <div className="App">
      Redux Test
      <h1>number : {number}</h1>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1:</h2>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2: </h2>
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>Box3: {number}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default App;
