const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/sequelize');

const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: DataTypes.INTEGER,
  book_id: DataTypes.INTEGER,
  order_date: DataTypes.DATE
}, {
  timestamps: false
});

module.exports = Order;