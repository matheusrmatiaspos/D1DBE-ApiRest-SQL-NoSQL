module.exports = app =>{
    const controller = require('../../controllers/sequelize/inventory')()

    app.route('/inventarios').get(controller.listInventory)

    app.route('/inventario/:id').get(controller.inventory)

    app.route('/inventarios').post(controller.insertInventory)
}