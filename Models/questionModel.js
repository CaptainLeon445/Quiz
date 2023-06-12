const mongoose=require("mongoose")

const questionSchema=mongoose.Schema({
    question:{
        type:String,
        trim: true
    },
    answer:{
        type:String,
        trim: true
    },
    category: String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Questions=mongoose.model("Questions", questionSchema);
module.exports=Questions;