const express = require("express")
const Router = express.Router()
const { getUserStats } = require("../Controllers/leaderBoardController");
const { Protect } = require("../Controllers/authController");

Router.route("/").get(Protect,getUserStats)

module.exports=Router;