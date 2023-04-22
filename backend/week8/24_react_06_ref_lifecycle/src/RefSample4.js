import React from "react";

class RefSample4 extends React.Component {
  // 1. createRef() 로 객체 생성
  myInput = React.createRef();

  handleFocus = () => {
    console.log(this.myInput.current);
    this.myInput.current.focus();
  };
  render() {
    return (
      <>
        <p>클래스형 컴포넌트에서 버튼 클릭시 input focusing</p>
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample4;
