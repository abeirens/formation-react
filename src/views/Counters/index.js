import { Link } from 'react-router-dom';
import Counter from '../../components/Counter';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
  addNewCounter,
  increment,
  decrement,
  reset,
  remove
} from '../../slices/counter';

export default function CountersIndex() {
  const array = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Container className="p-3">
        <Link className="link-secondary" to="/">Retour</Link>
        <div className="text-center mb-4">
          <h1>Mes compteurs</h1>
          <Button variant="secondary" onClick={() => dispatch(addNewCounter())}>Ajouter un compteur</Button>
        </div>

        <Row className="row-cols-6 g-3">
          {array.map((value, index) => (
            <Col key={`counter-${index}`}>
              <Counter
                value={value}
                add={() => {dispatch(increment(index))}}
                remove={() => {dispatch(decrement(index))}}
                reset={() => {dispatch(reset(index))}}
                supp={() => {dispatch(remove(index))}}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
