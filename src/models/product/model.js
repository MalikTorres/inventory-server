'use strict';

const productModel = (sequelize, DataTypes) => sequelize.define('Product', {
  name: { type: DataTypes.STRING, required: true },
  category: { type: DataTypes.STRING, required: true },
  type: { type: DataTypes.STRING, required: true },
});

module.exports = productModel;
