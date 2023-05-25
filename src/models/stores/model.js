'use strict';

const storesModel = (sequelize, DataTypes) => sequelize.define('Stores', {
  name: { type: DataTypes.STRING, required: true },
  location: { type: DataTypes.STRING, required: true },
});

module.exports = storesModel;
