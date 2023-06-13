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
Router.use(Protect)
Router.route("/:id").get(getAUser).patch(updateUser).delete(deleteUser);
Router.route("/account/:me").get(getAccount).patch(updateMe).delete(deleteMe);

module.exports=Router;
