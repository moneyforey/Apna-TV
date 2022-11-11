const express = require("express");
const Upcomingmovie = require('../model/Popularmovies.schema')
const bcrypt = require("bcrypt");

 const app = express.Router();

 app.get("/",async(req,res)=>{
         let data = await Upcomingmovie.find();
         res.send(data);
 })


module.exports = app;