import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers/counterReducer";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Hello World: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
