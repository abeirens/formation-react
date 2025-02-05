import {Link} from 'react-router-dom';
import { Col, Row, Container, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <Container className='text-center p-3'>
      <h1 className="mb-3">Dashboard</h1>
      <Row className='justify-content-center g-3'>
        <Col xs="auto" className=''>
          <Link to="/counters">
            <Button variant="secondary">Compteurs</Button>
          </Link>
        </Col>
        <Col xs="auto" className=''>
          <Link to="/calculator">
            <Button variant="secondary">Calculatrice</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
