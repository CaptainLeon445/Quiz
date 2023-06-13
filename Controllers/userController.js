const User = require("./../Models/userModel");
// get all the users
exports.getAllUsers = async (req, res) => {
  try {
    const doc=await User.find()
    res.status(200).json({
      message: "success",
      results: doc.length,
      data: doc,
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
    const id= req.params.id
    const doc=await User.findById(id)
    res.status(200).json({
      message: "success",
      data: doc,
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
    const id= req.params.id
    const doc=await User.findByIdAndUpdate(id)
    res.status(200).json({
      message: "success",
      data: doc,
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
    const id= req.params.id
    const doc=await User.findByIdAndDelete(id)
    res.status(200).json({
      message: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err: err.message,
    });
  }
};

// get me
exports.getAccount = async (req, res) => {
  try {
    const id= req.user.id
    const doc=await User.findById(id)
    res.status(200).json({
      message: "success",
      data: doc,
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
    const id= req.params.me
    const content=req.body
    const doc=await User.findByIdAndUpdate(id, content, {
      new:true,
      runValidators: true
    })
    res.status(200).json({
      message: "success",
      data: doc,
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
    const id= req.user.id
    const content={ active: false }
    await User.findByIdAndUpdate(id, content)
    res.status(204).json({
      message: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err: err.message,
    });
  }
};
