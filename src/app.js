const express = require('express')

const app = express()

require('dotenv').config()

require('./connection/db')

const productroutes = require('./rouets/productroutes')

app.use(express.json())
app.use('/',productroutes)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`${port} pe shuru kr skte hein`)
})