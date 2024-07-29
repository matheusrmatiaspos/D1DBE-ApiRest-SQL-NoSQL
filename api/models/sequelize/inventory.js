const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/sequelize');

const Inventory = sequelize.define('Inventory', {
  inventory_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  book_id: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER
}, {
  timestamps: false
});

Inventory.in

module.exports = Inventory;