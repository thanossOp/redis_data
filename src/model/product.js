const mongoose = require('mongoose')

const productschema = new mongoose.Schema({
    productName :{
        type : String,
        required : true
    },
    productQuantity :{
        type : Number,
        required : true
    },
    productPrice: {
        type : Number,
        required:true
    }
},{
    versionKey : false,
})

const Product = mongoose.model('Product',productschema)

module.exports = Product