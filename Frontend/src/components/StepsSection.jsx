function StepsSection() {
  const steps = [
    {
      id: 1,
      title: 'Choisir la catégorie d’artisanat',
      text: 'Sélectionnez une catégorie depuis le menu pour afficher les artisans correspondants.'
    },
    {
      id: 2,
      title: 'Choisir un artisan',
      text: 'Consultez les profils proposés et sélectionnez le professionnel adapté à votre besoin.'
    },
    {
      id: 3,
      title: 'Le contacter via le formulaire',
      text: 'Accédez à sa fiche détaillée puis envoyez votre demande grâce au formulaire de contact.'
    },
    {
      id: 4,
      title: 'Recevoir une réponse sous 48h',
      text: 'Une réponse vous sera apportée dans un délai de 48 heures.'
    }
  ]

  return (
    <section id="comment-ca-marche" className="py-5 bg-light">
      <div className="container">
        <div className="mb-4 text-center">
          <p className="text-uppercase fw-semibold mb-2">Mode d’emploi</p>
          <h2 className="fw-bold">Comment trouver mon artisan ?</h2>
          <p className="mb-0">
            Une recherche simple, claire et accessible à tous.
          </p>
        </div>

        <div className="row g-4">
          {steps.map((step) => (
            <div key={step.id} className="col-12 col-md-6">
              <article className="step-card h-100 p-4 rounded-4 shadow-sm bg-white">
                <div className="step-card__number mb-3">{step.id}</div>
                <h3 className="h5">{step.title}</h3>
                <p className="mb-0">{step.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StepsSection