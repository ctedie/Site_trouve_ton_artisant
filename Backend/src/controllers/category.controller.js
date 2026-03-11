const { Category } = require('../models');

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      order: [['name', 'ASC']]
    });

    res.json(categories);
  } catch (error) {
    next(error);
  }
};