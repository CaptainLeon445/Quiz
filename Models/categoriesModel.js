const mongoose=require("mongoose")
const slugify=require("slugify")


const categorySchema=mongoose.Schema({
    name:{
        type:String,
        unique:[true, "Duplicate category name is not accepted"],
        trim: true
    },
    slug: String,
    createdAt:{
        type:Date,
        default:Date.now(),
        select: false
    }
})
// DOCUMENT MIDDLEWARE: runs before .save() and .create()
categorySchema.pre("save", function(next){
    this.slug=slugify(this.name, {lower:true})
    next();
})

const Categories=mongoose.model("Categories", categorySchema);
module.exports=Categories;