const Router = require('express')
const router = new Router()
const productController = require('../controller/product.controller')

router.post('',productController.createProduct)
router.get('',productController.getProducts)
router.get('/:id',productController.getOneProduct)
router.put('/:id',productController.updateProduct)
router.delete('/:id',productController.deleteProduct)

module.exports = router