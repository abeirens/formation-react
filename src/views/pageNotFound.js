import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="d-flex flex-column gap-2 align-items-center justify-content-center vh-100">
      <h1>Erreur 400</h1>
      <Link to="/">
        <Button variant="secondary">Retour à l'accueil</Button>
      </Link>
    </div>
  )
}
