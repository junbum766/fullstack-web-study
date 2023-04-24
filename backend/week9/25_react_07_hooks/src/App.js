import UseMemoTest from './UseMemoTest'
import UseCallbackTest from './UseCallbackTest'
import UseReducerTest from './UseReducerTest'

function App() {
  return (
    <div className="App">
      <UseMemoTest />
      <hr/>
      <UseCallbackTest/>
      <hr/>
      <UseReducerTest/>
    </div>
  );
}

export default App;
