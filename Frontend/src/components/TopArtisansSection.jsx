import ArtisanCard from './ArtisanCard'
import { getAllArtisans } from '../services/artisanService'

function TopArtisansSection() {
  const artisans = getAllArtisans().slice(0, 3)

  return (
    <section id="artisans-du-mois" className="py-5">
      <div className="container">
        <div className="mb-4 text-center">
          <h2 className="fw-bold">Les artisans du mois</h2>
        </div>

        <div className="row g-4">
          {artisans.map((artisan) => (
            <div key={artisan.id} className="col-12 col-md-6 col-lg-4">
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopArtisansSection