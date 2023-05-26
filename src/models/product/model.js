'use strict';

const productModel = (sequelize, DataTypes) => sequelize.define('Product', {
  name: { type: DataTypes.STRING, required: true },
  category: { type: DataTypes.STRING, required: true },
  cost: { type: DataTypes.FLOAT, required: true },
  groceryStoreId:{
    type:DataTypes.INTEGER,
    required: true,
  },
});

module.exports = productModel;
