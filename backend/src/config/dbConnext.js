const mongoose = require("mongoose");

const dbConnect = ()=>{
   
    return  mongoose.connect("mongodb+srv://moneyforey:iRar0V9ZQhGRUpfm@cluster0.indvxl7.mongodb.net/ApnaTv")
}

module.exports = dbConnect;