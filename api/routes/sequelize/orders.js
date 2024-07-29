module.exports = app => {
    const controller = require('../../controllers/sequelize/order')()

    app.route('/pedidos').get(controller.listOrders)

    app.route('/pedido/:id').get(controller.order)

    app.route('/pedidos').post(controller.insertOder)
}