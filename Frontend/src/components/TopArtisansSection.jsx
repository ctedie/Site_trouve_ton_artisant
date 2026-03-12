import { useEffect, useState } from 'react'
import ArtisanCard from './ArtisanCard'
import { getAllArtisans } from '../services/artisanService'

function TopArtisansSection() {
  const [artisans, setArtisans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadTopArtisans() {
      try {
        setLoading(true)
        setError(false)

        const data = await getAllArtisans()
        setArtisans(data.slice(0, 3))
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadTopArtisans()
  }, [])

  return (
    <section id="artisans-du-mois" className="top-artisans-section">
      <div className="container">
        <header className="top-artisans-section__header">
          <p className="top-artisans-section__eyebrow">Sélection</p>
          <h2>Les artisans du mois</h2>
          <p className="top-artisans-section__intro">
            Découvrez trois professionnels mis en avant pour la qualité de leur
            savoir-faire et leur engagement.
          </p>
        </header>

        {loading && <p className="text-center">Chargement des artisans...</p>}
        {error && <p className="text-center">Impossible de charger les artisans du mois.</p>}

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
  )
}

export default TopArtisansSection