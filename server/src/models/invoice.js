'use strict';
module.exports = (sequelize, DataTypes) => {
  var Invoice = sequelize.define('Invoice', {
    user_id: DataTypes.INTEGER,
    tax: DataTypes.FLOAT,
    discount: DataTypes.FLOAT
  }, {
    timestamp: false
  });
  Invoice.associate = function(models) {
    // associations can be defined here
    Invoice.belongsTo(models.User,{foreignKey:'user_id', targetKey: 'id'})
    Invoice.belongsToMany(models.Item, {through: models.ItemInInvoice})
  };
  return Invoice;
};