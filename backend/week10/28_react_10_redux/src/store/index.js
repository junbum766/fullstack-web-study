import counterReducer from "./counterReducer";
import isDataReducer from "./isDataReducer";
import { combineReducers } from "@reduxjs/toolkit"; // 여러개의 Reducer를 하나로 합침

const rootReducer = combineReducers({
  counter: counterReducer,
  isData: isDataReducer,
});

export default rootReducer;
