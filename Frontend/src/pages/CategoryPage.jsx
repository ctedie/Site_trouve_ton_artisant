import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArtisanCard from '../components/ArtisanCard'
import Seo from '../components/Seo'
import { getArtisansByCategory } from '../services/artisanService'

function formatCategoryLabel(slug) {
  const labels = {
    alimentation: 'Alimentation',
    batiment: 'Bâtiment',
    fabrication: 'Fabrication',
    services: 'Services'
  }

  return labels[slug] || slug
}

function CategoryPage() {
  const { slug } = useParams()

  const [artisans, setArtisans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const categoryLabel = formatCategoryLabel(slug)

  const categoryContent = {
  batiment: {
    title: 'Les artisans du bâtiment',
    intro:
      'Maçons, couvreurs, plombiers ou électriciens : trouvez un professionnel qualifié pour vos travaux.',
    image: '/images/categories/batiment-hero.png'
  },
  services: {
    title: 'Les artisans de service',
    intro:
      'Découvrez des professionnels de confiance pour répondre à vos besoins du quotidien.',
    image: '/images/categories/services-hero.png'
  },
  fabrication: {
    title: 'Les artisans de fabrication',
    intro:
      'Menuiserie, ferronnerie, création sur mesure : explorez les savoir-faire artisanaux de la région.',
    image: '/images/categories/fabrication-hero.png'
  },
  alimentation: {
    title: 'Les artisans de l’alimentation',
    intro:
      'Boulangeries, pâtisseries et métiers de bouche : trouvez les artisans gourmands près de chez vous.',
    image: '/images/categories/alimentation-hero.png'
  }
}

const currentCategory = categoryContent[slug] || {
  title: categoryLabel,
  intro: `Retrouvez les artisans sélectionnés dans la catégorie ${categoryLabel.toLowerCase()}.`,
  image: '/images/categories/default-hero.png'
}

  useEffect(() => {
    async function loadArtisans() {
      try {
        setLoading(true)
        setError(false)

        const data = await getArtisansByCategory(slug)
        setArtisans(data)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadArtisans()
  }, [slug])

  return (
    <>
      <Seo
        title={`${categoryLabel} | Trouve ton artisan`}
        description={`Découvrez les artisans de la catégorie ${categoryLabel}.`}
      />

      <section className="category-page">
<div
  className="category-page__hero category-page__hero--visual"
  style={{ backgroundImage: `url(${currentCategory.image})` }}
>
          <div className="category-page__hero-overlay">
            <div className="container">
              <p className="category-page__eyebrow">Catégorie</p>
              <h1 className="category-page__title">{currentCategory.title}</h1>
              <p className="category-page__intro">{currentCategory.intro}</p>

              {!loading && !error && (
                <p className="category-page__count">
                  {artisans.length} artisan{artisans.length > 1 ? 's' : ''} disponible{artisans.length > 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="container category-page__content">
          {loading && (
            <p className="category-page__state">Chargement des artisans...</p>
          )}

          {error && (
            <p className="category-page__state category-page__state--error">
              Une erreur est survenue lors du chargement.
            </p>
          )}

          {!loading && !error && artisans.length === 0 && (
            <div className="category-page__empty">
              <h2>Aucun artisan trouvé</h2>
              <p>
                Aucun artisan n’est disponible pour cette catégorie pour le moment.
              </p>
            </div>
          )}

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
    </>
  )
}

export default CategoryPage