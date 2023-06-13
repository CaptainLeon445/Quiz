const jwt = require("jsonwebtoken");
const User = require("./../Models/userModel");
const mongoose = require("mongoose");

// create user
exports.createUser = async (req, res) => {
  const doc = await User.create({
                                    username: req.body.username,
                                    email: req.body.email,
                                    password: req.body.password,
                                    passwordConfirm: req.body.passwordConfirm,
                                });
  const token = jwt.sign({id:doc._id}, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
  try {
    res.status(200).json({
      message: "success",
      token,
      data: doc,
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err,
    });
  }
};

// get all the users
exports.getAllUsers = async (req, res) => {
  try {
    res.status(200).json({
      message: "success",
      data: "Route is yet to be defined",
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err: err.message,
    });
  }
};

// get a user
exports.getAUser = async (req, res) => {
  try {
    res.status(200).json({
      message: "success",
      data: "Route is yet to be defined",
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err: err.message,
    });
  }
};

// update the user
exports.updateUser = async (req, res) => {
  try {
    res.status(200).json({
      message: "success",
      data: "Route is yet to be defined",
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err: err.message,
    });
  }
};

// delete the user
exports.deleteUser = async (req, res) => {
  try {
    res.status(200).json({
      message: "success",
      data: "Route is yet to be defined",
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err: err.message,
    });
  }
};

// get me
exports.getMe = async (req, res) => {
  try {
    res.status(200).json({
      message: "success",
      data: "Route is yet to be defined",
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err: err.message,
    });
  }
};

// update me
exports.updateMe = async (req, res) => {
  try {
    res.status(200).json({
      message: "success",
      data: "Route is yet to be defined",
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err: err.message,
    });
  }
};

// delete me
exports.deleteMe = async (req, res) => {
  try {
    res.status(200).json({
      message: "success",
      data: "Route is yet to be defined",
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err: err.message,
    });
  }
};
