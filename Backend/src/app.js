require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const routes = require('./routes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    message: 'Trop de tentatives. Réessaie plus tard.',
  },
});

app.use('/api/contacts', contactLimiter);

app.get('/', (req, res) => {
  res.json({ message: 'API Trouve ton artisan' });
});

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;