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

      <div className="container py-5">
        <header className="mb-4">
          <h1 className="fw-bold">Résultats de recherche</h1>
          <p className="mb-0">
            Recherche en cours pour : <strong>{query}</strong>
          </p>
        </header>

        {loading && <p>Chargement des résultats...</p>}
        {error && <p>Une erreur est survenue lors de la recherche.</p>}

        {!loading && !error && artisans.length === 0 && (
          <p>Aucun artisan trouvé pour cette recherche.</p>
        )}

        {!loading && !error && artisans.length > 0 && (
          <div className="row g-4">
            {artisans.map((artisan) => (
              <div key={artisan.id} className="col-12 col-md-6 col-lg-4">
                <ArtisanCard artisan={artisan} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default SearchPage