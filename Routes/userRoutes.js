const express = require("express");
const Router = express.Router();
const {
  getAllUsers,
  getAUser,
  updateUser,
  deleteUser,
  getMe,
  updateMe,
  deleteMe,
} = require("./../Controllers/userController");


Router.route("/").get(getAllUsers);
Router.route("/:id").get(getAUser).patch(updateUser).delete(deleteUser);
Router.route("/:me").get(getMe).patch(updateMe).delete(deleteMe);

module.exports=Router;
