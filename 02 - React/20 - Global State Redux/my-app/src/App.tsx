
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, incrementByAmount } from "./redux/counterSlice.js"

function App() {
  
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="text-center">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded m-2"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded m-2"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded m-2"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        +5
      </button>
    </div>
    </>
  )
}

export default App
