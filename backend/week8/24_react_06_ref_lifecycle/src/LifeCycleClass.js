// 부모 컴포넌트
import React, { useState } from "react";
import LifeCycleClassChild from "./LifeCycleClassChild";

class LifeCycleClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 7,
      visible: true,
    };
  }
  changeVisible = () => {
    this.setState({ visible: !this.state.visible });
  };
  increaseNum = () => {
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    return (
      <>
        <button onClick={this.increaseNum}>PLUS</button>
        <button onClick={this.changeVisible}>ON/OFF</button>
        {this.state.visible && <LifeCycleClassChild num={this.state.number} />}
      </>
    );
  }
}

export default LifeCycleClass;
