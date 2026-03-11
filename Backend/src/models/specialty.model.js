const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Specialty = sequelize.define(
  'Specialty',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(120),
      allowNull: false,
      unique: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id',
    },
  },
  {
    tableName: 'specialties',
    timestamps: false,
  }
);

module.exports = Specialty;