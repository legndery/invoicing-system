'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemInInvoice = sequelize.define('ItemInInvoice', {
    InvoiceId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  ItemInInvoice.associate = function(models) {
    // associations can be defined here
  };
  return ItemInInvoice;
};