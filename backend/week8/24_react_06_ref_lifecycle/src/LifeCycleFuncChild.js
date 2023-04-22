// 자식 컴포넌트
import { useEffect, useState } from "react";

function LifeCycleFuncChild(props) {
  const { num } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    // mount 시점에 실행
    console.log("mount!!!");

    return () => {
      // unmount 시점에 실행
      console.log("unmount!!!");
    };
  }, []);

  useEffect(() => {
    // mount & update 시점에 실행
    console.log("mount or update!!!");
  });

  useEffect(() => {
    // text update 될 때마다 실행
    console.log("mount or text update!!!");
  }, [text]);

  return (
    <>
      <p>LifeCycleFuncChild</p>
      <h1>{num}</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </>
  );
}

export default LifeCycleFuncChild;
