import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import App1 from "./App1";
// import App2 from "./App2";
// import App3 from "./App3";
import App4 from "./App4";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store";

// store 정의
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App4 />
  </Provider>
);
