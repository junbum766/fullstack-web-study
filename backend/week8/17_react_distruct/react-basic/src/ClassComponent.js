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

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <button onClick={this.props.valid}>콘솔 메세지</button>
      </div>
    );
  }
}

export default ClassComponent;
