const express = require("express");
const  dbConnect  = require("./config/dbConnext");
const signUpRoute = require("./routes/Signup.routes");
const userRoute = require("./routes/User.routes");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use("/login", userRoute);
app.use("/register", signUpRoute);

app.get("/", (req, res)=>{
    res.send("Hello World is here")
})



app.listen(8080, async()=>{
    await dbConnect();

    console.log("connected at 8080")
})