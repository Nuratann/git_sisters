const Router = require('express')
const router = new Router()
const personController = require('../controllers/personController')


router.post('/',personController.create)
router.get('/',personController.getOne)
router.get('/list',personController.getAll)


module.exports = router