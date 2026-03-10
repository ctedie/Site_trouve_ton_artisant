import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import RatingStars from '../components/RatingStars'
import Seo from '../components/Seo'
import { getArtisanById } from '../services/artisanService'

function ArtisanPage() {
  const { id } = useParams()

  const [artisan, setArtisan] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadArtisan() {
      try {
        setLoading(true)
        setError(false)

        const data = await getArtisanById(id)
        setArtisan(data)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadArtisan()
  }, [id])

  if (loading) {
    return (
      <div className="container py-5">
        <p>Chargement de la fiche artisan...</p>
      </div>
    )
  }

  if (error || !artisan) {
    return (
      <div className="container py-5">
        <h1>Artisan introuvable</h1>
        <p>Impossible de charger cette fiche artisan.</p>
      </div>
    )
  }

  return (
    <>
      <Seo
        title={`${artisan.name} | Trouve ton artisan`}
        description={`Découvrez ${artisan.name}, ${artisan.specialty} à ${artisan.city}.`}
      />

      <div className="container py-5">
        <div className="row g-5">
          <div className="col-12 col-lg-6">
            <div className="artisan-detail__image-wrapper mb-4">
              <img
                src={artisan.imageUrl}
                alt={artisan.name}
                className="img-fluid rounded-4 shadow-sm artisan-detail__image"
              />
            </div>

            <h1 className="fw-bold mb-3">{artisan.name}</h1>

            <div className="mb-3">
              <RatingStars rating={artisan.rating} />
            </div>

            <p><strong>Spécialité :</strong> {artisan.specialty}</p>
            <p><strong>Localisation :</strong> {artisan.city}</p>

            <section className="mt-4">
              <h2 className="h4">À propos</h2>
              <p>{artisan.about}</p>
            </section>

            {artisan.website && (
              <p className="mt-4">
                <strong>Site web :</strong>{' '}
                <a href={artisan.website} target="_blank" rel="noreferrer">
                  Visiter le site
                </a>
              </p>
            )}
          </div>

          <div className="col-12 col-lg-6">
            <h2 className="h4 mb-3">Contacter cet artisan</h2>
            <ContactForm artisan={artisan} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ArtisanPage