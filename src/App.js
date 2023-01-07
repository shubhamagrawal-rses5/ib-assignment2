import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers/counterReducer";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Hello World: {count}</h1>
      <button className="bn11" onClick={() => dispatch(decrement())}>Decrement</button>
      <button className="bn11" onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
