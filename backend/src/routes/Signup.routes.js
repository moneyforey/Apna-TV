const express = require("express");
const User = require("../model/UserSchema");
const bcrypt = require("bcrypt");
const signUpRoute  = express.Router();

signUpRoute.get("/", (req, res)=>{
    res.send("done")
})

signUpRoute.post("/", async(req, res)=>{
      const {email, password} = req.body;
   try{
          let user = await User.findOne({email: email});
           if(!user){
            console.log("done")
            let data = new User(req.body);
            data.password = await bcrypt.hash(password, 10)
            await data.save();
              return res.send({
                data: data, 
                message :  "User Register SuccessFully"});
             
            }
           
          return res.status(401).send({
            error: "User Already Exist"
          })

   }catch(e){
        res.send(e.message)
   }
    
})
module.exports = signUpRoute