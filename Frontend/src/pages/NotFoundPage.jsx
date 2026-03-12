import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page introuvable | Trouve ton artisan"
        description="La page demandée est introuvable."
      />

      <section className="not-found-page">
        <div className="container">
          <div className="not-found-page__content">
            <div className="not-found-page__image-wrapper">
              <img
                src="/images/404/chantier-404.png"
                alt="Illustration de chantier vide"
                className="not-found-page__image"
              />
            </div>

            <p className="not-found-page__eyebrow">Erreur 404</p>

            <h1 className="not-found-page__title">
              Oups, cette page semble en construction
            </h1>

            <p className="not-found-page__text">
              La page que vous recherchez n’existe pas ou n’est plus disponible.
            </p>

            <Link to="/" className="btn btn-primary not-found-page__button">
              Retour à l’accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage