import { useDispatch, useSelector } from "react-redux";
import { addCake, buyCake, extenuateCake, incrementCake, reset } from "./redux/action";
import './style/style.css'

function App() {
  const dispatch = useDispatch();
  const cakesCount = useSelector((state) => state.cakes);

  return (
    <div className="App">
      <h1>Cakes: {cakesCount}</h1>
      <div className="button-container">
        <button onClick={() => dispatch(addCake())}>Add Cakes</button>
        <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
        <button onClick={() => dispatch(incrementCake())}>Add 5 Cakes</button>
        <button onClick={() => dispatch(extenuateCake())}>Buy 5 Cakes</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default App;
