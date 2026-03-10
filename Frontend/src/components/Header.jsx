import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllCategories } from '../services/categoryService'

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
            <form className="search-form" role="search" onSubmit={handleSubmit}>
              <label htmlFor="artisan-search" className="visually-hidden">
                Rechercher un artisan
              </label>

              <div className="input-group">
                <input
                  id="artisan-search"
                  type="search"
                  className="form-control"
                  placeholder="Rechercher un artisan"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
              {loading && <span>Chargement...</span>}
              {error && <span>Catégories indisponibles</span>}

              {!loading &&
                !error &&
                categories.map((category) => (
                  <Link
                    key={category.id}
                    className="btn btn-outline-secondary btn-sm"
                    to={`/categorie/${category.slug}`}
                  >
                    {category.name}
                  </Link>
                ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header