import { Link } from "react-router-dom";

function StudentMainPage() {
  const style = { margin: "4px" };

  return (
    <>
      <header className="Header">
        <h2>Router 실습</h2>
        <nav>
          <ul>
            <li style={style}>
              <Link to="/student/sean">학생</Link>
            </li>
            <li style={style}>
              <Link to="/student/codingon">코딩온</Link>
            </li>
            <li style={style}>
              <Link to="/student/new?name=jisu" >searchParams</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="MainPage">
        <h1>여기는 홈!</h1>
      </main>
    </>
  );
}

export default StudentMainPage;
