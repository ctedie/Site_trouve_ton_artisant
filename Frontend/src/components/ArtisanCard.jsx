import { Link } from 'react-router-dom'
import RatingStars from './RatingStars'

function ArtisanCard({ artisan }) {
  return (
    <article className="artisan-card card h-100 border-0">
      <div className="artisan-card__image-wrapper">
        <img
          src={artisan.imageUrl || '/images/artisans/default.png'}
          alt={artisan.name}
          className="artisan-card__image"
        />
      </div>

      <div className="card-body">
        <p className="artisan-card__category">
          {artisan.categoryName || artisan.category}
        </p>

        <h3 className="h5 card-title">{artisan.name}</h3>

        <div className="artisan-card__rating">
          <RatingStars rating={artisan.rating} />
        </div>

        <p>
          <strong>Spécialité :</strong> {artisan.specialty}
        </p>

        <p>
          <strong>Localisation :</strong> {artisan.city}
        </p>
      </div>

      <div className="artisan-card__footer">
        <Link to={`/artisan/${artisan.id}`} className="artisan-card__button">
          Voir la fiche
        </Link>
      </div>
    </article>
  )
}

export default ArtisanCard