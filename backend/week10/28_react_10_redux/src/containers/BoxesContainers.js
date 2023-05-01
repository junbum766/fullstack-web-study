// container : redux store와 components의 매개채
// => 컴포넌트를 컨테이너로 감싸서 컴포넌트는 오직 ui만 신경쓰도록!

import { useDispatch, useSelector } from "react-redux";
import { Box1, Box2, Box3 } from "../App4";
import { increase, decrease } from "../store/counterReducer";

export const Box1Container = () => {
  const number = useSelector((state) => state.counter.number);
  return <Box1/>;
};

export const Box2Container = () => {
  return <Box2 />;
};

export const Box3Container = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <Box3
      number={number}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    />
  );
};
