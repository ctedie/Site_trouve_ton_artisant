import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-top mt-5">
      <div className="container py-4">
        <div className="d-flex flex-wrap gap-3 mb-3">
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/donnees-personnelles">Données personnelles</Link>
          <Link to="/accessibilite">Accessibilité</Link>
          <Link to="/cookies">Cookies</Link>
        </div>

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
    </footer>
  )
}

export default Footer