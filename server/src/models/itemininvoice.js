'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemInInvoice = sequelize.define('ItemInInvoice', {
    invoice_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  ItemInInvoice.associate = function(models) {
    // associations can be defined here
  };
  return ItemInInvoice;
};