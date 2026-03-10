import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
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
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-12 col-lg-6">
          <h1 className="fw-bold mb-3">{artisan.name}</h1>

          <p><strong>Spécialité :</strong> {artisan.specialty}</p>
          <p><strong>Ville :</strong> {artisan.city}</p>
          <p><strong>Note :</strong> {artisan.rating}/5</p>
          <p className="mt-3">{artisan.description}</p>
        </div>

        <div className="col-12 col-lg-6">
          <h2 className="h4 mb-3">Contacter cet artisan</h2>
          <ContactForm artisan={artisan} />
        </div>
      </div>
    </div>
  )
}

export default ArtisanPage