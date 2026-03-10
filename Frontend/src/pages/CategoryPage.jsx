import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArtisanCard from '../components/ArtisanCard'
import { getArtisansByCategory } from '../services/artisanService'

function CategoryPage() {
  const { slug } = useParams()

  const [artisans, setArtisans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadArtisans() {
      try {
        setLoading(true)
        setError(false)

        const data = await getArtisansByCategory(slug)
        setArtisans(data)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadArtisans()
  }, [slug])

  return (
    <div className="container py-5">
      <header className="mb-4">
        <h1 className="fw-bold text-capitalize">Artisans : {slug}</h1>
        <p>Découvrez les artisans spécialisés dans cette catégorie.</p>
      </header>

      {loading && <p>Chargement des artisans...</p>}

      {error && <p>Une erreur est survenue lors du chargement.</p>}

      {!loading && !error && artisans.length === 0 && (
        <p>Aucun artisan trouvé dans cette catégorie.</p>
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
  )
}

export default CategoryPage