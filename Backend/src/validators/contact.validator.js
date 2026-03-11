const validateContact = (req, res, next) => {
  const { artisanId, name, email, subject, message } = req.body || {};

  if (!artisanId || !name || !email || !subject || !message) {
    return res.status(400).json({
      message: 'Tous les champs sont obligatoires.',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: 'Adresse email invalide.',
    });
  }

  next();
};

module.exports = {
  validateContact,
};