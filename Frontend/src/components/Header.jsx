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
      <div className="container py-3">
        <div className="row g-3 align-items-center">
          <div className="col-12 col-lg-3">
            <Link to="/" className="site-brand d-inline-block" aria-label="Retour à l’accueil">
              <img
                src={logo}
                alt="Trouve ton artisan"
                className="site-brand__logo"
              />
            </Link>
          </div>

          <div className="col-12 col-lg-5">
            <nav
              className="category-nav d-flex flex-wrap justify-content-center gap-3"
              aria-label="Catégories principales"
            >
              {loading && <span>Chargement...</span>}

              {error && <span>Catégories indisponibles</span>}

              {!loading &&
                !error &&
                categories.map((category) => (
                  <Link key={category.id} to={`/categorie/${category.slug}`}>
                    {category.name}
                  </Link>
                ))}
            </nav>
          </div>

          <div className="col-12 col-lg-4">
            <form className="search-form" role="search" onSubmit={handleSubmit}>
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
    </header>
  )
}

export default Header