const express=require("express");
const Router=express.Router();
const { getQuestions, createQuestion, answerQuestion, getQuestion, updateQuestion, deleteQuestion }=require("./../Controllers/questionController")
const { Protect }=require("../Controllers/authController")
Router.use(Protect)
Router
    .route("/")
    .get(getQuestions)
Router.route("/:ctgId/set-question").post(createQuestion)
Router.route("/:ctgId/my-question").get(getQuestion)
Router.route("/:id/answer").post(answerQuestion)
Router
    .route("/:id")
    .patch(updateQuestion)
    .delete(deleteQuestion)

module.exports=Router;