import { Link } from 'react-router-dom'
import RatingStars from './RatingStars'

function ArtisanCard({ artisan }) {
  return (
    <article className="artisan-card card h-100 shadow-sm border-0 rounded-4">
      <div className="card-body p-4">
        <p className="text-uppercase small fw-semibold mb-2">
          {artisan.categoryName || artisan.category}
        </p>

        <h3 className="h5 card-title mb-2">{artisan.name}</h3>

        <div className="mb-3">
          <RatingStars rating={artisan.rating} />
        </div>

        <p className="mb-2">
          <strong>Spécialité :</strong> {artisan.specialty}
        </p>

        <p className="mb-0">
          <strong>Localisation :</strong> {artisan.city}
        </p>
      </div>

      <div className="card-footer bg-white border-0 pt-0 px-4 pb-4">
        <Link to={`/artisan/${artisan.id}`} className="btn btn-outline-primary w-100">
          Voir la fiche
        </Link>
      </div>
    </article>
  )
}

export default ArtisanCard