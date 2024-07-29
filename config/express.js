const express    = require('express');
const bodyParser = require('body-parser');

module.exports = () => {
  const app = express()

  app.set('port', process.env.PORT || 8080)

  app.use(bodyParser.json())

  app

  require('../api/routes/root')(app)
  // MongoDB Endpoints
  require('../api/routes/mongoose/books')(app)
  require('../api/routes/mongoose/authors')(app)
  require('../api/routes/mongoose/users')(app)

  //Postgres Endpoints
  require('../api/routes/sequelize/orders')(app)
  require('../api/routes/sequelize/inventorys')(app)
  require('../api/routes/sequelize/reviews')(app)
  

  return app
};