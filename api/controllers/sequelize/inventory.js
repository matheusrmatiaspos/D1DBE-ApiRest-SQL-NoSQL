module.exports = () => {
    const inventoryDB = require('../../models/sequelize/inventory')
    const controller = {}

    controller.listInventory = async (req,res) => {
        try {
            const inventories = await inventoryDB.findAll();
            res.json(inventories);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    controller.inventory = async (req,res) => {
        let inventory;
        try {
            inventory = await inventoryDB.findByPk(req.params.id);
            if (inventory == null) {
                return res.status(404).json({ message: 'Não foi possível encontrar o inventário' });
            }
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json(inventory);
    }

    controller.insertInventory = async (req,res) => {
        try {
            const newInventory = await inventoryDB.create(req.body);
            res.status(201).json(newInventory);
          } catch (err) {
            res.status(400).json({ message: err.message });
          }
        
    }

    return controller
}