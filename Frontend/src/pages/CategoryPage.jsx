import { useParams } from 'react-router-dom'
import ArtisanCard from '../components/ArtisanCard'

function CategoryPage() {
  const { slug } = useParams()

  const artisans = [
    {
      id: 1,
      name: 'Dupont Couverture',
      specialty: 'Couvreur',
      city: 'Lyon',
      rating: 4.5,
      category: 'batiment',
      description: 'Spécialiste des travaux de toiture et de rénovation.'
    },
    {
      id: 2,
      name: 'Faure Plomberie',
      specialty: 'Plombier',
      city: 'Grenoble',
      rating: 4.8,
      category: 'batiment',
      description: 'Installation et dépannage de systèmes de plomberie.'
    },
    {
      id: 3,
      name: 'Atelier Martin',
      specialty: 'Menuiserie',
      city: 'Villeurbanne',
      rating: 4.9,
      category: 'fabrication',
      description: 'Création sur mesure et rénovation d’ouvrages en bois.'
    },
    {
      id: 4,
      name: 'Ferronnerie Petit',
      specialty: 'Ferronnier',
      city: 'Valence',
      rating: 4.7,
      category: 'fabrication',
      description: 'Conception et fabrication d’ouvrages métalliques.'
    },
    {
      id: 5,
      name: 'Boulangerie Morel',
      specialty: 'Boulanger',
      city: 'Vienne',
      rating: 4.7,
      category: 'alimentation',
      description: 'Maison artisanale reconnue pour la qualité de ses produits.'
    }
  ]

  const filteredArtisans = artisans.filter(
    (artisan) => artisan.category === slug
  )

  return (
    <div className="container py-5">
      <header className="mb-4">
        <h1 className="fw-bold text-capitalize">
          Artisans : {slug}
        </h1>
        <p>
          Découvrez les artisans spécialisés dans cette catégorie.
        </p>
      </header>

      <div className="row g-4">
        {filteredArtisans.map((artisan) => (
          <div key={artisan.id} className="col-12 col-md-6 col-lg-4">
            <ArtisanCard artisan={artisan} />
          </div>
        ))}
      </div>

      {filteredArtisans.length === 0 && (
        <p>Aucun artisan trouvé dans cette catégorie.</p>
      )}
    </div>
  )
}

export default CategoryPage