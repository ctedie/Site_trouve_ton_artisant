import { Link } from 'react-router-dom'
import heroImage from '../assets/images/hero-home.png'

function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-section__overlay">
        <div className="container hero-section__container">
          <div className="hero-section__content">
            <h1 className="hero-section__title">
              Trouvez facilement un artisan
              <br />
              de confiance en région
              <br />
              Auvergne-Rhône-Alpes
            </h1>

            <p className="hero-section__text">
              Découvrez les meilleurs artisans locaux près de chez vous.
            </p>

            <a href="#artisans-du-mois" className="btn btn-primary hero-section__button">
              Découvrez les artisans
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection