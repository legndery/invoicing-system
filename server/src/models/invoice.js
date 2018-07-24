'use strict';
module.exports = (sequelize, DataTypes) => {
  var Invoice = sequelize.define('Invoice', {
    user_id: DataTypes.INTEGER,
    tax: DataTypes.FLOAT,
    discount: DataTypes.FLOAT
  }, {});
  Invoice.associate = function(models) {
    // associations can be defined here
    Invoice.hasOne(models.User)
  };
  return Invoice;
};