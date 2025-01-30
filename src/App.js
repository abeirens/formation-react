import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter(counter + 1)
  }

  function remove() {
    setCounter(counter - 1)
  }

  function reset() {
    setCounter(0)
  }


  return (
    <div className="App">
      <h1>Compteur</h1>

      <div>{counter}</div>

      <button onClick={add}>+</button>
      <button onClick={remove}>-</button>
      <button onClick={reset}>Réinitialiser</button>
    </div>
  );
}

export default App;
