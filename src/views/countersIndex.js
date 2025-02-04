import { useState } from 'react';
import Counter from '../components/counter';

export default function CountersIndex() {
  const [countersArray, setCountersArray] = useState([]);

  const increment = (index) => {
    const newCountersArray = [...countersArray];
    newCountersArray[index] += 1;
    setCountersArray(newCountersArray);
  }

  const decrement = (index) => {
    const newCountersArray = [...countersArray];
    newCountersArray[index] -= 1;
    setCountersArray(newCountersArray);
  }

  const reinit = (index) => {
    const newCountersArray = [...countersArray];
    newCountersArray[index] = 0;
    setCountersArray(newCountersArray);
  }

  const addNewCounter = () => {
    setCountersArray([...countersArray, 0])
  }

  const removeCounter = (index) => {
    setCountersArray(countersArray.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h1>Mes compteurs</h1>
      <button onClick={addNewCounter}>Ajouter un compteur</button>

      {countersArray.map((value, index) => (
        <div className="container-counter" key={`counter-${index}`}>
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
  )
}
