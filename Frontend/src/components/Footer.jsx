import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer border-top mt-5">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h2 className="site-footer__title h5">Trouve ton artisan</h2>
            <p className="mb-3">
              Trouvez rapidement un artisan de confiance dans votre région.
            </p>

            <address className="mb-0">
              101 cours Charlemagne
              <br />
              CS 20033
              <br />
              69269 LYON CEDEX 02
              <br />
              France
              <br />
              +33 (0)4 26 73 40 00
            </address>
          </div>

          <div className="col-12 col-md-6">
            <h2 className="h5">Informations</h2>
            <nav aria-label="Liens légaux">
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                <li>
                  <Link to="/mentions-legales">Mentions légales</Link>
                </li>
                <li>
                  <Link to="/donnees-personnelles">Données personnelles</Link>
                </li>
                <li>
                  <Link to="/accessibilite">Accessibilité</Link>
                </li>
                <li>
                  <Link to="/cookies">Cookies</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer