const errorHandler = (err, req, res, next) => {
  console.error('Erreur serveur :', err);

  res.status(500).json({
    message: 'Erreur serveur interne',
    error: err.message,
  });
};

module.exports = errorHandler;