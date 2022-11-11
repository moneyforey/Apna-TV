const express = require("express");
const User = require("../model/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
 const userRoute = express.Router();

 userRoute.post("/", async(req, res)=>{
    try{
        if(req.body.email && req.body.password){
            let user = new User(req.body); 
            await user.save();  
        } 
        
        
        res.send(
            "hello"
        )

    }catch(e){

    }
  

 }) 


module.exports = userRoute;