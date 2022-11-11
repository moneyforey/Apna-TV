const express = require("express");
const cors=require("cors")
const dbConnect  = require("./config/dbConnext");
const userRoute = require("./routes/User.routes");
const popularmovieRoute = require('./routes/Popularmovies.routes');
const upcomingmovieRoute = require('./routes/Upcomingmovies.routes');
const topratedmovieRoute = require('./routes/Upcomingmovies.routes');
const adminRoute=require("../src/routes/admin.router")
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors())
app.use("/login", userRoute)
app.use('/popularmovies',popularmovieRoute)
app.use('/upcomingmovies',upcomingmovieRoute)
app.use('/topratedmovies',topratedmovieRoute)
app.use("/movieadmin",adminRoute)


app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/todo.txt')
})



app.listen(8080, async()=>{
    await dbConnect();

    console.log("http://localhost:8080")
})