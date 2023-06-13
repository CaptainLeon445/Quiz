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
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Categories",
        required:[true, "Questions must belong to a category"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
},
{
    toJSON: {virtuals: true},
    toOject: {virtuals: true}
})

questionSchema.pre(/^find/, function(next){
    this.populate({
        path: "category",
        select: "-__v -createdAt"
    })
    next();
})

const Questions=mongoose.model("Questions", questionSchema);
module.exports=Questions;