const express = require("express")
const Router = express.Router()
const { getUserStats } = require("../Controllers/leaderBoardController")

Router.route("/").get(getUserStats)

module.exports=Router;