const mongoose = require('../../../config/mongoose');

const UserSchema = new mongoose.Schema({
  user_id: String,
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', UserSchema);

module.exports = User;