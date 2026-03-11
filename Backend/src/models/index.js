const sequelize = require('../config/db');
const Category = require('./category.model');
const Specialty = require('./specialty.model');
const Artisan = require('./artisan.model');

Category.hasMany(Specialty, { foreignKey: 'categoryId' });
Specialty.belongsTo(Category, { foreignKey: 'categoryId' });

Specialty.hasMany(Artisan, { foreignKey: 'specialtyId' });
Artisan.belongsTo(Specialty, { foreignKey: 'specialtyId' });

module.exports = {
  sequelize,
  Category,
  Specialty,
  Artisan,
};