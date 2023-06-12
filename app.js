const app=require("./middlewares")
const categoryRoutes=require("./Routes/categoryRoutes")

app.use("/v1/api/categories", categoryRoutes)
module.exports=app;