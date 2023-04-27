import { useSearchParams } from "react-router-dom";

function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('mode'));
  return (
    <main className={`MainPage ${searchParams.get('mode')}`}>
      <h1>여기는 홈!</h1>
      <button onClick={() => setSearchParams({ mode : 'Dark'})}>다크모드</button>
      <button onClick={() => setSearchParams({ mode : null})}>일반모드</button>
    </main>
  );
}

export default MainPage;
