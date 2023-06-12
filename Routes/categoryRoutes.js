const express=require("express");
const Router=express.Router();
const { createCategory, getCategory, getCategories, deleteCategory, updateCategory }=require("./../Controllers/categoryController")

Router
    .route("/")
    .get(getCategories)
    .post(createCategory)

Router
    .route("/:id")
    .get(getCategory)
    .patch(updateCategory)
    .delete(deleteCategory)

module.exports=Router;