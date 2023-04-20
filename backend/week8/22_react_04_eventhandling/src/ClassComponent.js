import React, { useState } from "react";

// class ClassComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: "Codingon" };
//     // this.printConsole = this.printConsole.bind(this);
//   }
// //   printConsole() {
// //     console.log("버튼 클릭! >> ", this.state);
// //   }
//   printConsole = () => {
//     console.log("버튼 클릭! >> ", this.state); // 화살표 함수로 만들면 위 this.printConsole 해줄 필요 없음
//   }
//   render() {
//     return (
//       <div>
//         클래스형 컴포넌트에서 이벤트 사용해보기
//         <button onClick={this.printConsole}>print console</button>
//       </div>
//     );
//   }
// }

// 0420 practice 1
// class ClassComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = { msg: "Hello World" };
//   }
//   goodbye = () => {
//     this.setState({msg : "Goodbye World"})
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.msg}</h1>
//         <button onClick={this.goodbye}>클릭</button>
//       </div>
//     );
//   }
// }

// 0420 practice 1 - 함수 버전
function ClassComponent() {
    const [msg, setMsg] = useState('Hello World!');
    const goodbye = () => {
        setMsg('Goodbye World!!!');
    }
    return ( 
        <>
        <h1>{msg}</h1>
        <button onClick={goodbye}>클릭</button>
        </>
     );
}


export default ClassComponent;
