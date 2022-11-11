const express = require("express");
const  dbConnect  = require("./config/dbConnext");
const signUpRoute = require("./routes/Signup.routes");
const userRoute = require("./routes/User.routes");
const popularmovieRoute = require('./routes/Popularmovies.routes');
const upcomingmovieRoute = require('./routes/Upcomingmovies.routes');
const topratedmovieRoute = require('./routes/Upcomingmovies.routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use("/login", userRoute);
app.use("/register", signUpRoute);
app.use('/popularmovies',popularmovieRoute)
app.use('/upcomingmovies',upcomingmovieRoute)
app.use('/topratedmovies',topratedmovieRoute)


app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/todo.txt')
})



app.listen(8080, async()=>{
    await dbConnect();

    console.log("http://localhost:8080")
})