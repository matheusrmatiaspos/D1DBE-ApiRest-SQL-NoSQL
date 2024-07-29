const { default: mongoose } = require('mongoose');

module.exports = () => {
    const booksDB = require('../../models/mongoose/book');
    const controller = {};

    controller.listBooks = async (req, res) => {
        try {
            const books = await booksDB.find();
            console.log(books)
            res.json(books);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    controller.book = async (req, res) => {
        let book;
        try {
            book = await booksDB.findOne({ "book_id": req.params.id });
            console.log(book)
            if (book == null) {
                book = await booksDB.findById(req.params.id);
                if (book == null) {
                    return res.status(404).json({ message: 'Livro não encontrado' });
                }
            }
        } catch (err) {
            if (err instanceof mongoose.Error.CastError) {
                return res.status(404).json({ message: 'Livro não encontrado' });
            }
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json(book);
    }

    controller.insertBook = async (req, res) => {
        const book = new booksDB(req.body);
        try {
            const newBook = await book.save();
            res.status(201).json(newBook);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    return controller;
}