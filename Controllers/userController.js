const User = require("./../Models/userModel");
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
