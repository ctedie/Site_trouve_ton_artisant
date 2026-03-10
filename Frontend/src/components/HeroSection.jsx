function HeroSection() {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-7">
            <p className="text-uppercase fw-semibold mb-2">Auvergne-Rhône-Alpes</p>
            <h1 className="display-5 fw-bold mb-3">
              Trouvez un artisan de confiance près de chez vous
            </h1>
            <p className="lead mb-4">
              Recherchez facilement un professionnel selon son métier, sa localisation
              ou son nom, et découvrez les artisans recommandés du mois.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#artisans-du-mois" className="btn btn-primary">
                Voir les artisans du mois
              </a>
              <a href="#comment-ca-marche" className="btn btn-outline-secondary">
                Comment ça marche ?
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="hero-section__panel p-4 rounded-4 shadow-sm">
              <h2 className="h4 mb-3">Un service simple</h2>
              <ul className="mb-0 ps-3">
                <li className="mb-2">Recherche par nom d’artisan</li>
                <li className="mb-2">Classement par catégorie</li>
                <li className="mb-2">Accès rapide aux informations utiles</li>
                <li>Prise de contact facilitée</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection