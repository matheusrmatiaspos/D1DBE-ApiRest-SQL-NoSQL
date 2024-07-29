module.exports = app => {
    const controller = require('../../controllers/mongoose/authors')()

    app.route('/autores').get(controller.listAuthors)

    app.route('/autor/:id').get(controller.author)

    app.route('/autores').post(controller.insertAuthor)
}