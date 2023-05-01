import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App2 from "./App2";
import { composeWithDevTools } from "redux-devtools-extension";

// state 초기값 설정
const initialState = {
  number: 9,
};

// Reducer 함수 정의
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        number: state.number + 1,
      };
    case "DECREMENT":
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

// store 정의
const store = configureStore({ reducer: reducer }, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App2 />
  </Provider>
);
