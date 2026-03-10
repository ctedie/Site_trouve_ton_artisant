import Seo from '../components/Seo'
import HeroSection from '../components/HeroSection'
import StepsSection from '../components/StepsSection'
import TopArtisansSection from '../components/TopArtisansSection'

function HomePage() {
  return (
    <>
      <Seo
        title="Trouve ton artisan | Accueil"
        description="Plateforme de recherche d’artisans en Auvergne-Rhône-Alpes."
      />
      <HeroSection />
      <StepsSection />
      <TopArtisansSection />
    </>
  )
}

export default HomePage