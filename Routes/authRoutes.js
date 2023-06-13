const express = require("express");
const Router = express.Router();
const { createUser, loginUser } = require("./../Controllers/authController");

Router
    .route("/register")
    .post(createUser)
Router
    .route("/login")
    .post(loginUser)

module.exports=Router;
