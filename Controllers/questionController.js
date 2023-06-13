const mongoose = require("mongoose");
const Questions = require("../Models/questionModel");


exports.createQuestion = async (req, res) => {
  try {
    const content = req.body;
    content.category = req.params.ctgId;
    const doc = await Questions.create(content);
    res.status(200).json({
      message: "success",
      data: doc,
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err:err.message,
    });
  }
};
exports.getQuestions = async (req, res) => {
  try {
    const doc = await Questions.find();
    res.status(200).json({
      message: "success",
      results: doc.length,
      data: doc,
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err,
    });
  }
};
exports.getQuestion = async (req, res) => {
  try {
    const obj = new mongoose.Types.ObjectId(req.params.ctgId)
    const doc = await Questions.aggregate([
        { 
            $match: { category: obj }
        },
        {
            $sample: { size : 1}
        }
    ]);
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
exports.updateQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const content = req.body;
    const doc = await Questions.findByIdAndUpdate(id, content, {
      upsert: true,
      new: true,
    });
    res.status(200).json({
      message: "success",
      data: doc,
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err,
    });
  }
};
exports.deleteQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Questions.findByIdAndDelete(id);
    res.status(200).json({
      message: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      err,
    });
  }
};

exports.answerQuestion = async (req, res) => {
    try {
      const id = req.params.id;
      const doc = await Questions.findById(id);
      const { answer } = req.body;
      if (answer.toLowerCase() === doc.answer.toLowerCase()) {
        res.status(200).json({
          message: "correct",
        });
      } else {
        res.status(200).json({
          message: "Incorret",
        });
      }
    } catch (err) {
      res.status(400).json({
        message: "fail",
        err,
      });
    }
  };
