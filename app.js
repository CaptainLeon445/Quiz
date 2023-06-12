const app=require("./middlewares")
const categoryRoutes=require("./Routes/categoryRoutes")
const questionRoutes=require("./Routes/questionRoutes")


app.use("/v1/api/categories", categoryRoutes)
app.use("/v1/api/questions", questionRoutes)
module.exports=app;