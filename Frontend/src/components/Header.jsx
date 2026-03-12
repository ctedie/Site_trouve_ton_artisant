import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllCategories } from '../services/categoryService'
import logo from '../assets/images/logo.png'

function Header() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getAllCategories()
        setCategories(data)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadCategories()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const trimmedValue = searchTerm.trim()

    if (!trimmedValue) {
      return
    }

    navigate(`/recherche?query=${encodeURIComponent(trimmedValue)}`)
    setSearchTerm('')
  }

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand site-brand" aria-label="Retour à l’accueil">
            <img
              src={logo}
              alt="Trouve ton artisan"
              className="site-brand__logo"
            />
          </Link>

          <button
            className="navbar-toggler site-header__toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <div className="site-header__content ms-auto">
              <nav
                className="category-nav navbar-nav flex-lg-row flex-column align-items-lg-center gap-lg-3"
                aria-label="Catégories principales"
              >
                {loading && <span>Chargement...</span>}

                {error && <span>Catégories indisponibles</span>}

                {!loading &&
                  !error &&
                  categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/categorie/${category.slug}`}
                      className="nav-link"
                    >
                      {category.name}
                    </Link>
                  ))}
              </nav>

              <form
                className="search-form ms-lg-4 mt-3 mt-lg-0"
                role="search"
                onSubmit={handleSubmit}
              >
                <label htmlFor="artisan-search" className="visually-hidden">
                  Rechercher un artisan
                </label>

                <div className="search-form__wrapper">
                  <input
                    id="artisan-search"
                    type="search"
                    className="form-control"
                    placeholder="Rechercher un artisan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button type="submit" className="search-form__button">
                    🔍
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header