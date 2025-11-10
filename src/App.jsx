import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Die from "./Die";
import "./App.css";

function App() {
  const [dice, setDice] = useState(generateAllDies());

  function generateAllDies() {
    const newDie = [];
    for (let i = 0; i < 10; i++) {
      const rand = Math.ceil(Math.random() * 6);
      const isHeld = false;
      newDie.push({ rand, isHeld });
    }
    return newDie;
  }

  function rollDice() {
    setDice(generateAllDies());
  }

  const dieceElement = dice.map((diceObj) => <Die value={diceObj.rand} />);
  console.log(generateAllDies());
  return (
    <>
      <div className="gameEnvironment">
        <div className="bt-css">{dieceElement}</div>
        <button onClick={rollDice}>Roll</button>
      </div>
    </>
  );
}

export default App;
