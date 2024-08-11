import { useState } from "react";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "../redux/start/selectors";
import { increment } from "../redux/start/slice";

function App() {
  const [countRea, setCountRea] = useState(0);

  const countRed = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Vite + React + Redux </h1>
      <div>
        <button onClick={() => setCountRea((countRea) => countRea + 1)}>
          React count is {countRea}
        </button>

        <button onClick={() => dispatch(increment())}>
          Redux count is {countRed}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
