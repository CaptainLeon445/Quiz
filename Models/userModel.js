const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        minLength:[4, "The Username must be atleast four characters"],
        unique:[true, "Duplicate username is not accepted"]
    },
    email:{
        type:String,
        unique:[true, "Duplicate email is not accepted"]
    },
    score: Number,
    position:Number,
    password: String,
    passwordConfirm: String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const User=mongoose.model("User", userSchema);
module.exports=User;