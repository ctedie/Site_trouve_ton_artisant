const { Op } = require('sequelize');
const { Artisan, Specialty, Category } = require('../models');

const getAllArtisans = async (req, res, next) => {
  try {
    const { category, search, top } = req.query;

    const artisanWhere = {};
    const categoryWhere = {};

    if (search) {
      artisanWhere.name = {
        [Op.like]: `%${search}%`,
      };
    }

    if (top === 'true') {
      artisanWhere.isTopArtisan = true;
    }

    if (category) {
      categoryWhere.slug = category;
    }

    const artisans = await Artisan.findAll({
      where: artisanWhere,
      include: [
        {
          model: Specialty,
          required: true,
          include: [
            {
              model: Category,
              required: true,
              where: Object.keys(categoryWhere).length ? categoryWhere : undefined,
            },
          ],
        },
      ],
      order: [['name', 'ASC']],
    });

    res.status(200).json(artisans);
  } catch (error) {
    console.error('Erreur getAllArtisans :', error);
    next(error);
  }
};

const getArtisanById = async (req, res, next) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: [
        {
          model: Specialty,
          include: [Category],
        },
      ],
    });

    if (!artisan) {
      return res.status(404).json({ message: 'Artisan introuvable' });
    }

    res.status(200).json(artisan);
  } catch (error) {
    console.error('Erreur getArtisanById :', error);
    next(error);
  }
};

module.exports = {
  getAllArtisans,
  getArtisanById,
};