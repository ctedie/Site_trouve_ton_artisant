import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ArtisanCard from '../components/ArtisanCard'
import Seo from '../components/Seo'
import { searchArtisansByName } from '../services/artisanService'

function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') || ''

  const [artisans, setArtisans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadResults() {
      if (!query.trim()) {
        setArtisans([])
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(false)

        const data = await searchArtisansByName(query)
        setArtisans(data)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadResults()
  }, [query])

  return (
    <>
      <Seo
        title={`Recherche : ${query} | Trouve ton artisan`}
        description={`Résultats de recherche pour ${query} sur Trouve ton artisan.`}
      />

      <section className="search-page">
        <div className="search-page__hero">
          <div className="container">
            <p className="search-page__eyebrow">Recherche</p>
            <h1 className="search-page__title">Résultats pour « {query} »</h1>
            <p className="search-page__intro">
              Retrouvez les artisans correspondant à votre recherche.
            </p>

            {!loading && !error && query.trim() && (
              <p className="search-page__count">
                {artisans.length} résultat{artisans.length > 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>

        <div className="container search-page__content">
          {!query.trim() && (
            <div className="search-page__empty">
              <h2>Aucune recherche saisie</h2>
              <p>
                Utilisez la barre de recherche du header pour rechercher un artisan.
              </p>
            </div>
          )}

          {loading && query.trim() && (
            <p className="search-page__state">Chargement des résultats...</p>
          )}

          {error && (
            <p className="search-page__state search-page__state--error">
              Une erreur est survenue lors de la recherche.
            </p>
          )}

          {!loading && !error && query.trim() && artisans.length === 0 && (
            <div className="search-page__empty">
              <h2>Aucun artisan trouvé</h2>
              <p>
                Aucun artisan ne correspond à votre recherche pour le moment.
              </p>
            </div>
          )}

          {!loading && !error && artisans.length > 0 && (
            <div className="row g-4 justify-content-center">
              {artisans.map((artisan) => (
                <div key={artisan.id} className="col-12 col-md-6 col-lg-4 d-flex">
                  <ArtisanCard artisan={artisan} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default SearchPage