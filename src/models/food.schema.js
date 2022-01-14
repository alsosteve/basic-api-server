
'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
  },
});

module.exports = Food;