import { Col, Row, Container, Button, Form } from 'react-bootstrap';
import * as Buttons from '../../buttons';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  reinit,
  undo,
  calculate,
  addOperator,
  percent,
  equals,
  addComma
} from '../../slices/calculator';

export default function CalculatorIndex() {
  const resultat = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  const handleAction = (action, buttonValue) => {
    switch (action) {
      case 'reinit':
        dispatch(reinit());
        break;
      case 'undo':
        dispatch(undo());
        break;
      case 'percent':
        dispatch(percent());
        break;
      case 'addOperator':
        dispatch(addOperator(buttonValue));
        break;
      case 'calculate':
        dispatch(calculate(buttonValue));
        break;
      case 'addComma':
        dispatch(addComma(buttonValue));
        break;
      case 'equals':
        dispatch(equals());
        break;
      default:
        console.log('Action inconnue :', action);
    }
  };

  return (
    <Container className="p-3">
      <Link className="link-secondary" to="/">Retour</Link>
      <h1 className="text-center mb-3">Calculatrice</h1>
      <div className="w-25 mx-auto">
        <Form.Control type="text" placeholder="0" value={resultat} readOnly />
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
