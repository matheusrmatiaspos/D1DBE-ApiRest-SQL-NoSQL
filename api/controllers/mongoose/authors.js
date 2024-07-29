const { default: mongoose } = require('mongoose');

module.exports = () => {
    const authorsDB = require('../../models/mongoose/author')
    const controller = {}

    controller.listAuthors = async (req, res) => {
        try {
            const authors = await authorsDB.find();
            res.json(authors);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    controller.author = async (req, res) => {
        let author;
        try {
            author = await authorsDB.findOne({ "author_id": req.params.id });
            if (author == null) {
                author = await authorsDB.findById(req.params.id);
                if (author == null) {
                    return res.status(404).json({ message: 'Autor não encontrado' });
                }
            }
        } catch (err) {
            if (err instanceof mongoose.Error.CastError) {
                return res.status(404).json({ message: 'Autor não encontrado' });
            }
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json(author);
    }

    controller.insertAuthor = async (req, res) => {
        const author = new authorsDB(req.body);
        try {
            const newAuthor = await author.save();
            res.status(201).json(newAuthor);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    return controller
}