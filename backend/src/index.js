const express=require("express")
const cors=require("cors")
const MovieRoute=require("../src/components/admin/admin.router")

const app=express()
app.use(cors())
app.use(express.json())
app.use("/movie",MovieRoute)

app.get("/",(req,res)=>{
    res.send("admin bhai")

})

app.listen(8080, async () => {
    
    console.log(`Server is running on port 8080`)
})