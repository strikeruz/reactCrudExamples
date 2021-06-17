const Router = require('express')
const router = new Router()
const EmployeController = require('../controllers/employeController')

router.get('/', EmployeController.all)
module.exports = router