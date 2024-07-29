const app = require('./config/express')();
const sequelizeConfig = require('./config/sequelize');
const port = app.get('port');

app.listen(port, () => {
  sequelizeConfig.sync().then(() => {
    console.log('Banco de Dados e Tabelas Criado');
  });
  console.log(`Servidor rodando na porta ${port}`)
});