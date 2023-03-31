const redisclient = require('../connection/db')
const Product = require('../model/product')

const createproduct = async (req, res) => {
    try {
        const newproduct = new Product({
            productName: req.body.productName,
            productQuantity: req.body.productQuantity,
            productPrice: req.body.productPrice,
        })
        const product = await newproduct.save()
        console.log(productId)
        res.status(200).json({
            status: 200,
            message: "product created ",
            product: product
        })
    } catch (error) {
        console.log("create product mein error")
    }
}

const getallproduct = async (req, res) => {
    try {
        const products = await Product.find()

        if (!products) {
            res.send('No poduct')
        }
        await redisclient.set('product', JSON.stringify(products), { EX: 5000 })
        res.status(200).json({
            status: 200,
            message: "here is a product list (database)",
            product: products
        })
    } catch (error) {
        console.log("getallproduct mein error")
    }
}

const searchproduct = async (req, res) => {
    try {
        const productid = req.params.id
        const sproduct = await Product.findById({ _id: productid })
        const redisproduct = JSON.stringify(sproduct)
        redisclient.set(`product:${productid}`, redisproduct)
        if (!sproduct) {
            res.send('No product')
        }
        res.status(200).json({
            status: 200,
            message: "Database data",
            product: sproduct
        })
    } catch (error) {
        console.log("searchproduct mein error")
    }
}
module.exports = {
    createproduct,
    getallproduct,
    searchproduct
}