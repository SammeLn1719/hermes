const Router = require('express')
const router = new Router()
const basketController = require('../controller/basket.controller')

router.post('',basketController.createBasket)
router.get('',basketController.getBaskets)
router.get('/:id',basketController.getOneBasket)
router.put('/:id',basketController.updateBasket)
router.delete('/:id',basketController.deleteBasket)

module.exports = router