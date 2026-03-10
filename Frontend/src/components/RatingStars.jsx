function RatingStars({ rating }) {
  const roundedRating = Math.round(rating)
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating-stars" aria-label={`Note de ${rating} sur 5`}>
      {stars.map((star) => (
        <span key={star} className="rating-stars__star">
          {star <= roundedRating ? '★' : '☆'}
        </span>
      ))}
      <span className="ms-2">{rating}/5</span>
    </div>
  )
}

export default RatingStars