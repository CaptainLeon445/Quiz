const express=require("express")
const morgan=require("morgan")
const app=express()
app.use(express.json())
app.use(morgan("dev"))
app.use((req, res, next)=>{
    console.log("This LEON's Mildware👋")
    next();
})

module.exports=app;