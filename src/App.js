import './App.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import * as Buttons from './buttons'

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
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState(false);
  const [hasDecimal, setHasDecimal] = useState(false);

  const handleAction = (action, buttonValue) => {
    switch (action) {
      case 'reinit':
        reinit();
        break;
      case 'undo':
        undo();
        break;
      case 'percent':
        percent();
        break;
      case 'addOperator':
        addOperator(buttonValue);
        break;
      case 'calculate':
        calculate(buttonValue);
        break;
      case 'addComma':
        addComma(buttonValue);
        break;
      case 'equals':
        equals();
        break;
      default:
        console.alert('Action inconnue :', action);
    }
  };

  const reinit = () => {
    setResult(0);
    setHasDecimal(false);
  }

  const undo = () => {
    setResult(result.toString().slice(0, -1));
  }

  const percent = () => {
    const extractPercent = result.split(/([+\-/*])/);
    if (extractPercent.length > 2) {
      const firstValue = extractPercent[0];
      const secondValue = extractPercent[2];
      const symbol = extractPercent[1];
      const percentValue = (firstValue * secondValue) / 100;
      const newResult = firstValue + symbol + percentValue;
      setResult(newResult);
    } else {
      const percentValue = result / 100;
      setResult(percentValue);
    }
  }

  const equals = () => {
    if (result === null) {
      setResult(0);
    } else {
      const equal = !operator ? eval(result) : eval(result.slice(0, -1));

      if(equal === Infinity) {
        setResult('Impossible de diviser par 0');
      } else {
        if (equal.toString().split('.').length > 1 && equal.toString().split('.')[1].length > 3) {
          setResult(equal.toFixed(3).toString());
        } else {
          setResult(equal.toString());
        }
      }
    }
    setOperator(false);
  }

  const addComma = (value) => {
    if (!hasDecimal) {
      if (result === 0) {
         setResult(0 + value);
      } else {
        const lastChar = result.split('').slice(-1)[0];
        console.log(lastChar)
        if (result !== null && ['+', '-', '*', '/'].includes(lastChar)) {
          setResult(result + 0 + value);
        } else {
          setResult(result + value);
        }
      }

      setHasDecimal(true);
    }
  }

  const calculate = (value) => {
    if(result === 0) {
      setResult(value)
    } else {
      setResult(result + value);
    }

    setOperator(false);
  }

  const addOperator = (value) => {
    if(!operator) {
      setResult(result + value);
      setOperator(true);
      setHasDecimal(false);
    }
  }

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

  function reinitialisation(index) {
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
      <div className="mt-5">
        <h1 className="text-center mb-4">Calculatrice</h1>
        <Container className="w-25 text-center">
          <Form.Control type="text" placeholder="0" value={result} readOnly />
          <Row className="row-cols-4 justify-content-end g-1 mt-2">
            {Buttons.buttons.flat().map((button, index) => {
              return (
                <Col key={`button-${index}`}>
                  <Button
                    className="w-100"
                    onClick={() => handleAction(button.action, button.value)}
                    variant={button.class}
                  >
                    {button.value}
                  </Button>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>

      <button onClick={addNewCounter}>Ajouter un compteur</button>
      <div className="container">
        {countersArray.map((value, index) => (
          <div className="container-counter" key={`counter-${index}`}>
            <Counter
              value={value}
              add={() => {increment(index)}}
              remove={() => {decrement(index)}}
              reset={() => {reinitialisation(index)}}
              supp={() => {removeCounter(index)}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
