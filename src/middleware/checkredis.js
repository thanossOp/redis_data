const redisclient = require("../connection/db")


const checkredis = async(req,res,next)=>{
    const productid = req.params.id
    const getdata = await redisclient.get(`product:${productid}`)

    if(getdata){
        let data = JSON.parse(getdata)
        res.status(200).json({
            status : 200,
            message : "redis data",
            data : data
        })
    }else{
        next()
    }
}

module.exports=checkredis