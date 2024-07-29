module.exports = app => {
    const controller = require('../../controllers/sequelize/reviews')()

    app.route('/avaliacoes').get(controller.listReviews)

    app.route('/avaliacao/:id').get(controller.review)

    app.route('/avaliacoes').post(controller.insertReview)
}