const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao Postgresql');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao Postgresql:', err);
  });

module.exports = sequelize;