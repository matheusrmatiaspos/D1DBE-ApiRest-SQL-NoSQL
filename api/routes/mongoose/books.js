module.exports = app => {
    const controller = require('../../controllers/mongoose/books')()

    app.route('/livros').get(controller.listBooks)

    app.route('/livro/:id').get(controller.book)

    app.route('/livros').post(controller.insertBook)
}