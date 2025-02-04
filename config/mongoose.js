const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

module.exports = mongoose;