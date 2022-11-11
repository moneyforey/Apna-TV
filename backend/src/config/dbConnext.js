const mongoose = require("mongoose");

const dbConnect = ()=>{
    // mongodb://localhost:27017/Zee5
    return  mongoose.connect("mongodb://localhost:27017/Zee5").catch((e)=>{
        console.log(e.message)
    })




    
}

module.exports = dbConnect;