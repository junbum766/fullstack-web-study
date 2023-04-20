function SyntheticEvent() {
  function syntheticEvent(event) {
    // synthetic Event
    // 리액트는 웹 브라우저의 nativeEvent가 아니라
    // nativeEvent를 감싼 synthetic Event를 사용함.
    // 즉, 리액트 고유 이벤트 객체!
    console.log(event);
  }
  function printInputValue(event) {
    console.log(event.target.value)
  }
  return (
    <div>
      <button onClick={syntheticEvent}>합성이벤트 콘솔 찍기</button>
      <input type="text" placeholder='아무거나 입력!' onChange={printInputValue}/>
    </div>
  );
}

export default SyntheticEvent;
