const express = require("express");
const  dbConnect  = require("./config/dbConnext");
const userRoute = require("./routes/User.routes");

const app = express();


app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use("/login", userRoute)

app.get("/", (req, res)=>{
    res.send("Hello World is here")
})



app.listen(8080, async()=>{
    await dbConnect();

    console.log("connected at 8080")
})