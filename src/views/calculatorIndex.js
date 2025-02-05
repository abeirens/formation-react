import { useState } from 'react';
import { Col, Row, Container, Button, Form } from 'react-bootstrap';
import * as Buttons from '../buttons';
import {Link} from 'react-router-dom';

export default function CalculatorIndex() {
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

  return (
    <Container className="p-3">
      <Link className="link-secondary" to="/">Retour</Link>
      <h1 className="text-center mb-3">Calculatrice</h1>
      <div className="w-25 mx-auto">
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
      </div>
    </Container>
  )
}
