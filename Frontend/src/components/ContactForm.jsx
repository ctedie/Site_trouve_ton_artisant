function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault()

    alert('Votre message a été envoyé.')
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="mb-3">
        <label className="form-label">Nom</label>
        <input type="text" className="form-control" required />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" required />
      </div>

      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          className="form-control"
          rows="4"
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