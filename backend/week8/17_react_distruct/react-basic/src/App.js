// import logo from './logo.svg';
import "./App.css";

function App() {
  let flag = true;
  const onClick = () => {
    console.log('click!')
  }
  return (
    <> {/* 태그 쓰기가 애매하면 빈 태그로 감싸줘도 된다. */}
      <div className="App" style={{backgroundColor: "white"}}>
        <header className="App-header">
          {flag ? "안녕하세요" : "안녕히가세요"}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p onClick={onClick}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
