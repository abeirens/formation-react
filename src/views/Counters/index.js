import {Link} from 'react-router-dom';
import { useState } from 'react';
import Counter from '../../components/Counter';
import { Col, Row, Container, Button } from 'react-bootstrap';


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
    <Container className="p-3">
      <Link className="link-secondary" to="/">Retour</Link>
      <div className="text-center mb-4">
        <h1>Mes compteurs</h1>
        <Button variant="secondary" onClick={addNewCounter}>Ajouter un compteur</Button>
      </div>

      <Row className="row-cols-6 g-3">
        {countersArray.map((value, index) => (
          <Col key={`counter-${index}`}>
            <Counter
              value={value}
              add={() => {increment(index)}}
              remove={() => {decrement(index)}}
              reset={() => {reinit(index)}}
              supp={() => {removeCounter(index)}}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
