import { useParams } from 'react-router-dom'
import ArtisanCard from '../components/ArtisanCard'
import { getArtisansByCategory } from '../services/artisanService'

function CategoryPage() {
  const { slug } = useParams()

  const artisans = getArtisansByCategory(slug)

  return (
    <div className="container py-5">
      <h1 className="fw-bold text-capitalize mb-4">
        Artisans : {slug}
      </h1>

      <div className="row g-4">
        {artisans.map((artisan) => (
          <div key={artisan.id} className="col-12 col-md-6 col-lg-4">
            <ArtisanCard artisan={artisan} />
          </div>
        ))}
      </div>

      {artisans.length === 0 && (
        <p>Aucun artisan trouvé.</p>
      )}
    </div>
  )
}

export default CategoryPage