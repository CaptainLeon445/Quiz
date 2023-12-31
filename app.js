const app=require("./middlewares")
const categoryRoutes=require("./Routes/categoryRoutes")
const questionRoutes=require("./Routes/questionRoutes")
const userRoutes=require("./Routes/userRoutes")
const authRoutes=require("./Routes/authRoutes")
const leaderBoardRoutes=require("./Routes/leaderBoardRoutes")




app.use("/v1/api/auth", authRoutes)
app.use("/v1/api/users", userRoutes)
app.use("/v1/api/categories", categoryRoutes)
app.use("/v1/api/questions", questionRoutes)
app.use("/v1/api/stats", leaderBoardRoutes)



module.exports=app;