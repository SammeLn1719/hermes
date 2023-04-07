const Router = require('express')
const router = new Router()
const discountController = require('../controller/discount.controller')

router.post('',discountController.createDiscount)
router.get('',discountController.getDiscounts)
router.get('/:id',discountController.getOneDiscount)
router.put('/:id',discountController.updateDiscount)
router.delete('/:id',discountController.deleteDiscount)

module.exports = router