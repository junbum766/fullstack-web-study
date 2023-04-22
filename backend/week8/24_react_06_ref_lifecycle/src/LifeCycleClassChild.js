import React from "react";

class LifeCycleClassChild extends React.Component {
  componentDidMount() {
    console.log("mount!!!");
  }
  componentWillUnmount() {
    console.log('unmount!!!')
  }
  componentDidUpdate() {
    console.log("update!!!");
  }
  render() {
    return (
      <>
        <p>LifeCycleClassChild {this.props.num}</p>
      </>
    );
  }
}

export default LifeCycleClassChild;
