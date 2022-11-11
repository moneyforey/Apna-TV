const express=require("express")
const MovieSchema=require("../model/admin.schema")

const app=express.Router()

app.get("/",async(req,res)=>{
  
    try {
        let data=await MovieSchema.find()
        res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
})

app.post("/",async(req,res)=>{
    try {
        let newMovie=new MovieSchema({...req.body})
        await newMovie.save()
        res.send(newMovie)
    } catch (error) {
        console.log(error)
        res.status(401).send(error.message)
    }
})

app.get("/:id",async(req,res)=>{
    let {id}=req.params
  
    try {
        let data=await MovieSchema.findById(id)
        res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
})

app.delete("/:id",async(req,res)=>{
    let {id}=req.params
  
    try {
        let data=await MovieSchema.findByIdAndDelete(id)
        console.log(data)
        res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
})

app.patch("/:id",async(req,res)=>{
    let {id}=req.params
  
    try {
        let data=await MovieSchema.findByIdAndUpdate(id,{...req.body},{new:true})
        res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
})

module.exports=app
