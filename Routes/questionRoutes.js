const express=require("express");
const Router=express.Router();
const { getQuestions, createQuestion, answerQuestion, getQuestion, updateQuestion, deleteQuestion }=require("./../Controllers/questionController")
const { Protect }=require("../Controllers/authController")
Router.use(Protect)
Router
    .route("/")
    .get(getQuestions)
Router.post("/:ctgId/set-question", createQuestion)
Router.route("/:ctgId/my-question").get(getQuestion)
Router.post("/:id/answer", answerQuestion)
Router
    .route("/:id")
    .patch(updateQuestion)
    .delete(deleteQuestion)

module.exports=Router;