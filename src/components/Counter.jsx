import { Button } from 'react-bootstrap';

export default function Counter({value, add, remove, reset, supp}) {
  return (
    <div className="border border-dark p-2 text-center">
      <h3 className="mb-3">Compteur</h3>

      <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
        <Button variant="secondary" onClick={() => {add()}}>+</Button>
        <div>{value}</div>
        <Button variant="secondary" onClick={() => {remove()}}>-</Button>
      </div>

      <Button variant="warning" onClick={() => {reset()}} className="me-2">
        Réinitialiser
      </Button>

      <Button variant="danger" onClick={() => {supp()}}>
        <i className="bi bi-trash3-fill"></i>
      </Button>
    </div>
  )
}
