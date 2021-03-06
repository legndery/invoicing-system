'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {
    timestamps: false
  });
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};