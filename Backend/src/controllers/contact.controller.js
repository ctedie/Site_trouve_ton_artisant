const { Artisan } = require('../models');
const { sendContactMail } = require('../services/mail.service');

const sendContact = async (req, res, next) => {
  try {
    const { artisanId, name, email, subject, message } = req.body;

    const artisan = await Artisan.findByPk(artisanId);

    if (!artisan) {
      return res.status(404).json({ message: 'Artisan introuvable' });
    }

    await sendContactMail({
      to: artisan.email,
      fromName: name,
      fromEmail: email,
      subject,
      message,
    });

    res.status(200).json({
      message: 'Message envoyé avec succès.',
    });
  } catch (error) {
    console.error('Erreur sendContact :', error);
    next(error);
  }
};

module.exports = {
  sendContact,
};