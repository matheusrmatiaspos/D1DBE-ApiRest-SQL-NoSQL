module.exports = () => {
    const orderDB = require('../../models/sequelize/order')
    const controller = {}

    controller.listOrders = async (req, res) => {
        try {
            const orders = await orderDB.findAll();
            res.json(orders);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    controller.order = async (req, res) => {
        let order;
        try {
            order = await orderDB.findByPk(req.params.id);
            if (order == null) {
                return res.status(404).json({ message: 'Não foi possível encontrar o pedido' });
            }
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json(order)
    }

    controller.insertOder = async (req,res) => {
        try {
            const newOrder = await orderDB.create(req.body);
            res.status(201).json(newOrder);
          } catch (err) {
            res.status(400).json({ message: err.message });
          }
    }

    return controller
}