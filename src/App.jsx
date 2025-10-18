// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Die from "./Die";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  function generateAllDies() {
    const newDie = [];
    for (let i = 0; i < 10; i++) {
      const rand = Math.ceil(Math.random() * 6);
      newDie.push(rand);
    }
    return newDie;
  }

  console.log(generateAllDies());
  return (
    <>
      <div className="gameEnvironment">
        <div className="bt-css">
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </div>
      </div>
    </>
  );
}

export default App;
