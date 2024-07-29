const mongoose = require('../../../config/mongoose');

const AuthorSchema = new mongoose.Schema({
  author_id: String,
  name: String,
  nationality: String,
  birth_year: Number,
  books_written: Number
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;