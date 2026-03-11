const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisan.controller');

router.get('/', artisanController.getAllArtisans);
router.get('/:id', artisanController.getArtisanById);

module.exports = router;