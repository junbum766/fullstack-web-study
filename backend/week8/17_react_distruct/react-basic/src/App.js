import Larva from "./Larva";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import "./App.css";
import PropTypes from "prop-types";

// function App() {
//   return (
//     <>
//       <ClassComponent name="홍길동" age="20" />
//       <ClassComponent name="김철수" age="22" />
//       <ClassComponent />
//       {/* 값을 안줘도 오류가 안남 */}
//       <FunctionComponent name="kim" />
//       <FunctionComponent />
//       <FunctionComponent name="choi" />
//     </>
//   );
// }

// practice 1
// function App() {
//   const name = "흰둥이";
//   const animal = "말티즈";
//   const a = 8;
//   const b = 10;
//   const title = "귀찮아여";
//   return (
//     <>
//       <h1>문제 1</h1>
//       <div>
//         이것은 div입니다.
//         <h3>이것은 div안에 있는 h3태그 입니다.</h3>
//       </div>
//       <hr />

//       <h1>문제 2</h1>
//       <h2>제 반려 동물의 이름은 {name}입니다.</h2>
//       <h2>
//         {name}은 {animal}입니다.
//       </h2>
//       <hr />

//       <h1>문제 3</h1>
//       <div>{3 + 5 == 8 ? "정답입니다." : "오답입니다."}</div>
//       <hr />

//       <h1>문제 4</h1>
//       <div>{a > b && "a가 b보다 더 큽니다"}</div>
//       <hr />

//       <h1>문제 5</h1>
//       <div class="container5">
//         <h2 class="title1">{title}</h2>
//         <div class="input">
//           <label for="id">아이디: </label>
//           <input id="id"></input>
//         </div>
//         <div class="input">
//           <label for="pw">비밀번호: </label>
//           <input id="pw"></input>
//         </div>
//       </div>
//       <hr />

//       <h1>문제 6</h1>
//       <div class='container6'>
//         <div class="red"></div>
//         <div class="orange"></div>
//         <div class="yellow"></div>
//         <div class="green"></div>
//         <div class="blue"></div>
//         <div class="navy"></div>
//         <div class="purple"></div>
//       </div>
//     </>
//   );
// }

// practice 2
Food.defaultProps = {
  name: "디폴트",
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
};

function Food(props) {
  return (
    <>
      <h3>내가 좋아하는 음식은 {props.name} 입니다~~</h3>
    </>
  );
}

function App() {
  return (
    <>
      <h1>문제 1</h1>
      <Food name="초콜릿" />
      <Food />
      <hr />

      <h1>문제 2</h1>
      <FunctionComponent title='나의 하루는 4시 40분에 시작된다' author='김유진' price='13,500' type='자기계발'/>
      <hr />

      <h1>문제 3</h1>
      <ClassComponent text='App 컴포넌트에서 넘겨준 text props 입니다.' valid={() => {console.log('콘솔 띄우기 성공!')}}/>
      <hr />
    </>
  );
}

export default App;
