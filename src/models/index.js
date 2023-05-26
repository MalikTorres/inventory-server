'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const productModel = require('./product/model.js');
const foodModel = require('./food/model.js');
const userModel = require('../auth/models/users.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const product = productModel(sequelize, DataTypes);
const users = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  product: new Collection(product),
  users,
};
