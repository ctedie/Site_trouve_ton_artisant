import ArtisanCard from './ArtisanCard'

function TopArtisansSection() {
  const artisans = [
    {
      id: 1,
      name: 'Dupont Couverture',
      specialty: 'Couvreur',
      city: 'Lyon',
      rating: 4.5,
      category: 'Bâtiment',
      description: 'Spécialiste des travaux de toiture et de rénovation.'
    },
    {
      id: 2,
      name: 'Atelier Martin',
      specialty: 'Menuiserie',
      city: 'Villeurbanne',
      rating: 4.9,
      category: 'Fabrication',
      description: 'Création sur mesure et rénovation d’ouvrages en bois.'
    },
    {
      id: 3,
      name: 'Boulangerie Morel',
      specialty: 'Boulanger',
      city: 'Vienne',
      rating: 4.7,
      category: 'Alimentation',
      description: 'Maison artisanale reconnue pour la qualité de ses produits.'
    }
  ]

  return (
    <section id="artisans-du-mois" className="py-5">
      <div className="container">
        <div className="mb-4 text-center">
          <p className="text-uppercase fw-semibold mb-2">Sélection</p>
          <h2 className="fw-bold">Les artisans du mois</h2>
          <p className="mb-0">
            Trois professionnels mis en avant pour la qualité de leur travail.
          </p>
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