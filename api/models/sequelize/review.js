const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/sequelize');

const Review = sequelize.define('Review', {
  review_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  book_id: DataTypes.INTEGER,
  user_id: DataTypes.INTEGER,
  rating: DataTypes.INTEGER,
  comment: DataTypes.TEXT
}, {
  timestamps: false
});

module.exports = Review;