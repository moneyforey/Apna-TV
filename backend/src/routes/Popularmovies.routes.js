const express = require("express");
const Popularmovie = require('../model/Popularmovies.schema')
const bcrypt = require("bcrypt");

 const app = express.Router();

 app.get("/",async(req,res)=>{
         let data = await Popularmovie.find();
         res.send(data);
 })


module.exports = app;