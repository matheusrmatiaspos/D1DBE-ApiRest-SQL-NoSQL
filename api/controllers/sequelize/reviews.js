module.exports = () => {
    const reviewsDB = require('../../models/sequelize/review')
    const controller = {}

    controller.listReviews = async(req,res) => {
        try {
            const reviews = await reviewsDB.findAll();
            res.json(reviews);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    controller.review = async(req,res) => {
        let review;
        try {
            review = await reviewsDB.findByPk(req.params.id);
            if (review == null) {
                return res.status(404).json({ message: 'Não foi possível encontrar a avaliação' });
            }
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json(review);
    }

    controller.insertReview = async (req,res) => {
        try {
            const newReview = await reviewsDB.create(req.body);
            res.status(201).json(newReview);
          } catch (err) {
            res.status(400).json({ message: err.message });
          }
    }

    return controller
}