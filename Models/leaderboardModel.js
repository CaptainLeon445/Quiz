const mongoose=require("mongoose")

const leaderboardSchema=mongoose.Schema({
    user: String,
    position: Number,
    category:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Leaderboard=mongoose.model("Leaderboard", leaderboardSchema);
module.exports=Leaderboard;