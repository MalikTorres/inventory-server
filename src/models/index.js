'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const productModel = require('./product/model.js');
const storesModel = require('./stores/model.js');
const Collection = require('./data-collection.js');
const userModel = require('../auth/models/users.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);
const Stores = storesModel(sequelize, DataTypes);
const Product = productModel(sequelize, DataTypes);
const User = userModel(sequelize, DataTypes);

// Stores.hasMany(Product, {
//   foreignKey:'groceryStoreId',
// });

// Product.belongsTo(Stores, {
//   foreignKey:'groceryStoreId',
// });

module.exports = {
  db: sequelize,
  stores: new Collection(Stores),
  product: new Collection(Product),
  user: User,
};
