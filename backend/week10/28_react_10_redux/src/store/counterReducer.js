// action type 정의
// 모듈이름 / 액션이름
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

// state 초기값 설정
const initialState = {
  number: 9,
};
// Reducer 함수 정의
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
