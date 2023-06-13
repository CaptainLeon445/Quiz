const mongoose=require("mongoose")
const validator=require("validator")
const bcrypt=require("bcryptjs")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        minLength:[4, "The Username must be atleast four characters"],
        unique:[true, "Duplicate username is not accepted"],
        required:[true, "Please provide your unique username"],
    },
    email:{
        type:String,
        unique:[true, "Duplicate email is not accepted"],
        validate:[validator.isEmail, "Please a valid email address"],
        required:[true, "Please provide your Email"],
        lowercase:true

    },
    score: Number,
    position:Number,
    password: {
        type: String,
        minLength: [8, "The password must contain at least 8 characters"],
        required:[true, "Please provide your password"],
        select:false
    },
    passwordConfirm: {
        type: String,
        minLength: [8, "The password confirm must contain at least 8 characters"],
        required:[true, "Please confirm your password"],
        // custom valaidator
        validate: {
            validator: function (el){
                return el === this.password
            },
            message: "The password confirm must be the same with password!" 
        }
    },
    active:{
        type: Boolean,
        default: true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

// document middleware
userSchema.pre("save", async function(next){
    if (!this.isModified('password')) return next();

    this.password=await bcrypt.hash(this.password, 12)

    this.passwordConfirm=undefined;

    next();
})
userSchema.methods.comparePassword=async function (candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword)
}


const User=mongoose.model("User", userSchema);
module.exports=User;