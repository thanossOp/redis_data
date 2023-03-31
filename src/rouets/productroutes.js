const routes = require('express').Router()

const { createproduct, getallproduct, searchproduct } = require('../controllers/productcontroller')

const checkredis = require('../middleware/checkredis')

routes.get('/product', getallproduct)

routes.post('/product', createproduct)

routes.get('/product/:id', checkredis, searchproduct)


module.exports = routes