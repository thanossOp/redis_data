const routes = require('express').Router()

const { createproduct, getallproduct, searchproduct } = require('../controllers/productcontroller')

const checkredis = require('../middleware/checkredis')

routes.get('/product',checkredis,getallproduct)

routes.post('/product',createproduct)

routes.get('/product/:id',searchproduct)


module.exports = routes