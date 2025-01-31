import './App.css';
import { useState } from 'react';

function Counter({value, add, remove, reset, supp}) {
  return (
    <div>
      <h1>Compteur</h1>

      <div>{value}</div>

      <button onClick={() => {add()}}>+</button>
      <button onClick={() => {remove()}}>-</button>
      <button onClick={() => {reset()}}>Réinitialiser</button>
      <button onClick={() => {supp()}}>Supprimer</button>
    </div>
  )
}

function App() {
  const [countersArray, setCountersArray] = useState([]);

  function increment(index) {
    const newCountersArray = [...countersArray];
    newCountersArray[index] += 1;
    setCountersArray(newCountersArray);
  }

  function decrement(index) {
    const newCountersArray = [...countersArray];
    newCountersArray[index] -= 1;
    setCountersArray(newCountersArray);
  }

  function reinit(index) {
    const newCountersArray = [...countersArray];
    newCountersArray[index] = 0;
    setCountersArray(newCountersArray);
  }

  function addNewCounter() {
    setCountersArray([...countersArray, 0])
  }

  function removeCounter(index) {
    setCountersArray(countersArray.filter((_, i) => i !== index))
  }

  return (
    <div className="App">
      <button onClick={addNewCounter}>Ajouter un compteur</button>
      <div className="container">
        {countersArray.map((value, index) => (
          <div className="container-counter">
            <Counter
              value={value}
              add={() => {increment(index)}}
              remove={() => {decrement(index)}}
              reset={() => {reinit(index)}}
              supp={() => {removeCounter(index)}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
