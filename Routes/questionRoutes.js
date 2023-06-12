const express=require("express");
const Router=express.Router();
const { getQuestions, createQuestion, answerQuestion, getQuestion, updateQuestion, deleteQuestion }=require("./../Controllers/questionController")

Router
    .route("/")
    .get(getQuestions)
    .post(createQuestion)
Router.get("/my-question", getQuestion)
Router.post("/:id/answer", answerQuestion)
Router
    .route("/:id")
    .patch(updateQuestion)
    .delete(deleteQuestion)

module.exports=Router;