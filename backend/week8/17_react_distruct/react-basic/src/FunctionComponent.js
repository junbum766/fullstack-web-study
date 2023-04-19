import React from "react";
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
function FunctionComponent(props) {
  return (
    <div className="container2_1">
      
      <div className="bestSeller2_1">이번주 베스트셀러</div>
      <div className="img2_1">????????????<br/>????????????<br/>????????????<br/>????????????<br/>????????????<br/>????????????<br/>????????????</div>
      <div className="title2_1">{props.title}</div>
      <div className="author2_1">저자: {props.author}</div>
      <div className="price2_1">판매가: {props.price}</div>
      <div className="type2_1">구분: {props.type}</div>
    </div>
  );
}

FunctionComponent.defaultProps = {
  title: "디폴트",
  author: "디폴트",
  price: "디폴트",
  type: "디폴트",
};

FunctionComponent.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.string,
  type: PropTypes.string,
};

export default FunctionComponent;
