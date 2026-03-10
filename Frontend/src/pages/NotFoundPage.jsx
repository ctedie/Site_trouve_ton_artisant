import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="container py-5 text-center">
      <h1>404</h1>
      <p>La page demandée n’existe pas.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Retour à l’accueil
      </Link>
    </div>
  )
}

export default NotFoundPage