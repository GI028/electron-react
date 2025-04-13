import { useState } from "react";
import reactLogo from "./assets/react.svg";
import electronLogo from "./assets/electron.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://www.electronjs.org/" target="_blank">
          <img src={electronLogo} className="logo" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Electron + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        This is an Electron + React project using TS
      </p>
    </>
  );
}

export default App;
