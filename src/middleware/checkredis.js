const redisclient = require("../connection/db")


const checkredis = async(req,res,next)=>{
    const getdata = await redisclient.get('product')

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