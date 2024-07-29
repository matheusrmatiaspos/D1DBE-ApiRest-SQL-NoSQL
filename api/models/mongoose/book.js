const mongoose = require('../../../config/mongoose');

const BookSchema = new mongoose.Schema({
  book_id: String,
  title: String,
  author_id: String,
  genre: String,
  published_year: Number
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;