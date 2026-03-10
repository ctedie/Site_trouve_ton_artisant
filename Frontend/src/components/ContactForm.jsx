function ContactForm({ artisan }) {
  function handleSubmit(e) {
    e.preventDefault()

    alert(`Votre message pour ${artisan.name} a été envoyé.`)
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="mb-3">
        <label htmlFor="contact-name" className="form-label">
          Nom
        </label>
        <input id="contact-name" type="text" className="form-control" required />
      </div>

      <div className="mb-3">
        <label htmlFor="contact-email" className="form-label">
          Email
        </label>
        <input id="contact-email" type="email" className="form-control" required />
      </div>

      <div className="mb-3">
        <label htmlFor="contact-subject" className="form-label">
          Objet
        </label>
        <input id="contact-subject" type="text" className="form-control" required />
      </div>

      <div className="mb-3">
        <label htmlFor="contact-message" className="form-label">
          Message
        </label>
        <textarea
          id="contact-message"
          className="form-control"
          rows="5"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>
  )
}

export default ContactForm