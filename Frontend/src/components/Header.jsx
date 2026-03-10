import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header border-bottom">
      <div className="container py-3">
        <div className="row g-3 align-items-center">
          <div className="col-12 col-lg-4">
            <Link to="/" className="site-brand text-dark d-inline-block">
              <span className="site-brand__title d-block">Trouve ton artisan</span>
              <span className="site-brand__subtitle d-block">
                La plateforme des artisans de confiance
              </span>
            </Link>
          </div>

          <div className="col-12 col-lg-4">
            <form className="search-form" role="search">
              <label htmlFor="artisan-search" className="visually-hidden">
                Rechercher un artisan
              </label>
              <div className="input-group">
                <input
                  id="artisan-search"
                  type="search"
                  className="form-control"
                  placeholder="Rechercher un artisan"
                />
                <button type="submit" className="btn btn-primary">
                  Rechercher
                </button>
              </div>
            </form>
          </div>

          <div className="col-12 col-lg-4">
            <nav
              className="category-nav d-flex flex-wrap justify-content-lg-end gap-2"
              aria-label="Catégories principales"
            >
              <Link className="btn btn-outline-secondary btn-sm" to="/categorie/batiment">
                Bâtiment
              </Link>
              <Link className="btn btn-outline-secondary btn-sm" to="/categorie/services">
                Services
              </Link>
              <Link className="btn btn-outline-secondary btn-sm" to="/categorie/fabrication">
                Fabrication
              </Link>
              <Link className="btn btn-outline-secondary btn-sm" to="/categorie/alimentation">
                Alimentation
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header