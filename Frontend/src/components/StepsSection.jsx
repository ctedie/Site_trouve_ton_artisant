function StepsSection() {
  return (
    <section className="steps-section">
      <div className="container">
        <header className="steps-section__header">
          <h2>Comment trouver mon artisan ?</h2>
          <p>
            Trouvez rapidement un artisan qualifié en 4 étapes simples.
          </p>
        </header>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Choisir la catégorie</h3>
            <p>Sélectionnez le domaine d’activité correspondant à votre besoin.</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Choisir un artisan</h3>
            <p>Consultez les profils disponibles dans votre région.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Contacter l’artisan</h3>
            <p>Envoyez une demande directement via le formulaire.</p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Recevoir une réponse</h3>
            <p>L’artisan vous répond généralement sous 48 heures.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepsSection