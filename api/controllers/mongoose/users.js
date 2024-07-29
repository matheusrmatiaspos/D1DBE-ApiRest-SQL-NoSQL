const { default: mongoose } = require('mongoose');

module.exports = () => {
    const usersDB = require('../../models/mongoose/user')
    const controller = {}

    controller.listUsers = async (req,res) => {
        try {
            const users = await usersDB.find();
            console.log(users)
            res.json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    controller.user = async (req,res) => {
        let user;
        try {
            user = await usersDB.findOne({'user_id':req.params.id});
            if (user == null) {
                user = await usersDB.findById(req.params.id);
                if (user == null) {
                    return res.status(404).json({ message: 'Usuário não encontrado' });
                }
            }
        } catch (err) {
            if (err instanceof mongoose.Error.CastError){
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json(user);
    }

    controller.insertUser = async (req,res) => {
        const user = new usersDB(req.body);
        try {
          const newUser = await user.save();
          res.status(201).json(newUser);
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
    }

    return controller
}