import React, { useState } from "react";
//import { Component } from 'react';
import PropTypes from "prop-types";

// function FunctionComponent(props) {
//   // function FunctionComponent({name}) 으로 쓰고, name으로 사용해도 됨
//   const { name } = props;
//   return (
//     <div>
//       <h1>Hello World, Function Component</h1>
//       <h5>{props.name}</h5>
//     </div>
//   );
// }

// FunctionComponent.defaultProps = {
//   name: "디폴트",
// };

// FunctionComponent.propTypes = {
//   name: PropTypes.string.isRequired,
// };

// practice 2
// function FunctionComponent(props) {
//   return (
//     <div className="container2_1">

//       <div className="bestSeller2_1">이번주 베스트셀러</div>
//       <div className="img2_1">????????????<br/>????????????<br/>????????????<br/>????????????<br/>????????????<br/>????????????<br/>????????????</div>
//       <div className="title2_1">{props.title}</div>
//       <div className="author2_1">저자: {props.author}</div>
//       <div className="price2_1">판매가: {props.price}</div>
//       <div className="type2_1">구분: {props.type}</div>
//     </div>
//   );
// }
// FunctionComponent.defaultProps = {
//   title: "디폴트",
//   author: "디폴트",
//   price: "디폴트",
//   type: "디폴트",
// };
// FunctionComponent.propTypes = {
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   price: PropTypes.string,
//   type: PropTypes.string,
// };

// 0419 state
// function FunctionComponent(props) {
//   const [counter, setCounter] = useState(0);
//   console.log(counter);
//   const up = (hi) => {
//     setCounter(counter + 1);
//   };

//   const { name } = props;
//   return (
//     <div>
//       <h1>Hello World, Function Component</h1>
//       <h5>{props.name}</h5>
//       <h5>{counter}</h5>
//       <button onClick={up}>숫자업</button>
//     </div>
//   );
// }

// practice
// function FunctionComponent(props) {
//   const [msg, setMsg] = useState('');
//   const ent = () => {
//     setMsg("입장하였습니다.");
//   };
//   const exit = () => {
//     setMsg("퇴장하였습니다.");
//   };
//   return (
//     <div>
//       <h1>practice</h1>
//       <p className="msgBox">{msg}</p>
//       <button onClick={ent}>입장</button>
//       <button onClick={exit}>퇴장</button>
//     </div>
//   );
// }

// && 활용법
// function FunctionComponent() {
//   const [message, setMessage] = useState('안녕하세요');
//   const [bool, setBool] = useState(false);
//   const Enter = () => {
//     setMessage('입장하였습니다');
//   };
//   const Out = () => {
//     setMessage('퇴장하였습니다');
//   };
//   const onClick = () => {
//     setBool(true);
//   };
//   return (
//     <>
//       {bool && (
//         <>
//           <h1>{message}</h1>
//           <button onClick={Enter}>입장</button>
//           <button onClick={Out}>퇴장</button>
//         </>
//       )}
//       <button onClick={onClick}>로그인성공</button>
//     </>
//   );
// }

// 0419 state practice
// function FunctionComponent(props) {
//   const [counter, setCounter] = useState(0);
//   const up = () => {
//     setCounter(counter+1);
//   };
//   const down = () => {
//     setCounter(counter-2);
//   };
//   return (
//     <div>
//       <h1>문제 2</h1>
//       <h5>{counter}</h5>
//       <button onClick={up}>+1</button>
//       <button onClick={down}>-2</button>
//     </div>
//   );
// }

// 0419 practice2
// function FunctionComponent(props) {
//   const [msg,setMsg] = useState([`검정색 글씨`, 'black']);
//   const red = () => {
//     setMsg(['빨간색 글씨', 'red']);
//   };
//   const blue = () => {
//     setMsg(['파란색 글씨', 'blue']);
//   };
//   return (
//     <div>
//       <h1>실습 2</h1>
//       <h2 style={{color: `${msg[1]}`}}>{msg[0]}</h2>
//       <button onClick={red}>빨간색</button>
//       <button onClick={blue}>파란색</button>
//     </div>
//   );
// }

// 0419 practice3
function FunctionComponent(props) {
  const [msg, setMsg] = useState("안녕하세요");
  const [bool, setBool] = useState(true);
  const yes = () => {
    setMsg("안녕하세요");
    setBool(true);
  };
  const no = () => {
    setMsg("");
    setBool(false);
  };
  return (
    <div>
      <h1>실습 3</h1>
      {bool ? (
        <button id="btn1" onClick={no}>
          사라져라
        </button>
      ) : (
        <button id="btn2" onClick={yes}>
          보여라
        </button>
      )}
      <h2>{msg}</h2>
    </div>
  );
}

export default FunctionComponent;
