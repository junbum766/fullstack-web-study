import React from "react"; // React.Component
import { Component } from "react"; // Component
import PropTypes from "prop-types";

// class ClassComponent extends React.Component {
//   // class형 component는 render() 함수 필수
//   render() {
//     console.log(this.props);
//     const { name, age } = this.props; //
//     return (
//       <div>
//         <h1>Hello World, Class Component</h1>
//         <h5>{this.props.name}</h5>
//         <h5>{age}</h5>
//       </div>
//     );
//   }
// }

// ClassComponent.defaultProps = {
//     name: "디폴트",
//   };

// ClassComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.string,
// };

// practice 2
// class ClassComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.text}</h1>
//         <button onClick={this.props.valid}>콘솔 메세지</button>
//       </div>
//     );
//   }
// }

// 0419 state
// class ClassComponent extends React.Component {
//   state = {
//     counter: 0,
//     num: 13,
//   };

//   up = () => {
//     console.log("up!", this.state.counter);
//     // this.state.counter += 1;
//     this.setState({counter: this.state.counter + 1})
//   };
//   down = () => {
//     this.setState(value => ({counter: this.state.counter - 1}))
//   }

//   render() {
//     console.log('hi')
//     const { name, age } = this.props;
//     const { counter } = this.state;
//     return (
//       <div>
//         <h1>Hello World, Class Component</h1>
//         <h5>{this.props.name}</h5>
//         <h5>{this.state.counter}</h5>
//         <h5>{this.state.num}</h5>
//         <button onClick={this.up}>숫자업</button>
//         <button onClick = {this.down}>숫자다운</button>
//         {/* 매개변수가 있는 경우 : onClick = {() => this.up('abc')} */}
//       </div>
//     );
//   }
// }

// 0419 state practice1
class ClassComponent extends React.Component {
  state = {
    counter: 0,
  };

  up = () => {
    this.setState({ counter: this.state.counter + 2 });
  };
  down = () => {
    this.setState((value) => ({ counter: this.state.counter - 1 }));
  };

  render() {
    return (
      <div>
        <h1>문제1</h1>
        <h5>{this.state.counter}</h5>
        <button onClick={this.up}>+2</button>
        <button onClick={this.down}>-1</button>
        <hr />
      </div>
    );
  }
}

export default ClassComponent;
