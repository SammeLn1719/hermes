const Router = require('express')
const router = new Router()
const reviewsController = require('../controller/reviews.controller')

router.post('',reviewsController.createReview)
router.get('',reviewsController.getReviews)
router.get('/:id',reviewsController.getOneReview)
router.put('/:id',reviewsController.updateReview)
router.delete('/:id',reviewsController.deleteReview)

module.exports = router