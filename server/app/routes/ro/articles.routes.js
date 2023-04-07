const Router = require('express')
const router = new Router()
const articlesController = require('../controller/articles.controller')

router.post('',articlesController.createArticles)
router.get('',articlesController.getArticles)
router.get('/:id',articlesController.getOneArticle)
router.put('/:id',articlesController.updateArticles)
router.delete('/:id',articlesController.deleteArticles)

module.exports = router