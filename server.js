const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config({
    path:"./config.env"
})
const app=require("./app")
const DB=process.env.DATABASE

mongoose.connect(DB, {
    useNewUrlParser: true
}).then(con =>{
    console.log("Database connected successfully")
}).catch(err =>{
    console.log("There is an error in the database", err)
})
const port=8000;
app.listen(port, ()=>{
    console.log(`Server running on Port ${port}`)
})