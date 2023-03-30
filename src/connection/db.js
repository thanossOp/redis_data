const mongoose = require('mongoose')

const redis = require('redis')

const redisclient = redis.createClient()

const db = process.env.DATABASE

mongoose.connect(db).then(()=>{
    console.log("DAtabase bhi Connect Ho chuka hein ")
})
.catch((err)=>{
    console.log("kuch gadbad hui hein",err)
})

redisclient.connect()

redisclient.on("connect",(err)=>{
    console.log("redis bhi connect")
})

module.exports = redisclient