import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="border-bottom">
      <div className="container py-3">
        <div className="d-flex flex-column gap-3">
          <Link to="/" className="fs-4 fw-bold text-dark">
            Trouve ton artisan
          </Link>

          <nav className="d-flex flex-wrap gap-3">
            <Link to="/categorie/batiment">Bâtiment</Link>
            <Link to="/categorie/services">Services</Link>
            <Link to="/categorie/fabrication">Fabrication</Link>
            <Link to="/categorie/alimentation">Alimentation</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header