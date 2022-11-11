const express = require("express");
const Topratedmovie = require('../model/Popularmovies.schema')
const bcrypt = require("bcrypt");

 const app = express.Router();

 app.get("/",async(req,res)=>{
         let data = await Topratedmovie.find();
         res.send(data);
 })


module.exports = app;