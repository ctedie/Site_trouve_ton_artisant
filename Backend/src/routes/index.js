const express = require('express');
const router = express.Router();

const categoryRoutes = require('./category.routes');
const artisanRoutes = require('./artisan.routes');
const contactRoutes = require('./contact.routes');

router.use('/categories', categoryRoutes);
router.use('/artisans', artisanRoutes);
router.use('/contacts', contactRoutes);

module.exports = router;