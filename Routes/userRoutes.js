const express = require("express");
const Router = express.Router();
const {
  getAllUsers,
  getAUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  getAccount,
} = require("./../Controllers/userController");
const { Protect }=require("../Controllers/authController")

Router.route("/").get(getAllUsers);
Router.route("/:id").get(getAUser).patch(updateUser).delete(deleteUser);
Router.route("/account").get(Protect,getAccount).patch(updateMe).delete(Protect);

module.exports=Router;
