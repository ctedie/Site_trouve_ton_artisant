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

      <section className="artisan-detail">
        <div className="container">
          <div className="artisan-detail__grid">
            <div className="artisan-detail__main">
              <div className="artisan-detail__image-wrapper">
                <img
                  src={artisan.imageUrl || '/images/artisans/default.png'}
                  alt={artisan.name}
                  className="artisan-detail__image"
                />
              </div>

              <div className="artisan-detail__content">
                <p className="artisan-detail__category">
                  {artisan.categoryName || artisan.category}
                </p>

                <h1 className="artisan-detail__title">{artisan.name}</h1>

                <div className="artisan-detail__rating">
                  <RatingStars rating={artisan.rating} />
                </div>

                <ul className="artisan-detail__meta">
                  <li>
                    <strong>Spécialité :</strong> {artisan.specialty}
                  </li>
                  <li>
                    <strong>Localisation :</strong> {artisan.city}
                  </li>
                </ul>

                <section className="artisan-detail__about">
                  <h2>À propos</h2>
                  <p>{artisan.about || artisan.description}</p>
                </section>

                {artisan.website && (
                  <p className="artisan-detail__website">
                    <strong>Site web :</strong>{' '}
                    <a href={artisan.website} target="_blank" rel="noreferrer">
                      Visiter le site
                    </a>
                  </p>
                )}
              </div>
            </div>

            <aside className="artisan-detail__aside">
              <div className="artisan-detail__contact-card">
                <h2>Contacter cet artisan</h2>
                <p>
                  Envoyez votre demande directement depuis ce formulaire.
                </p>
                <ContactForm artisan={artisan} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default ArtisanPage