const express=require("express");
const Router=express.Router();
const { createCategory, getCategory, getCategories, deleteCategory, updateCategory }=require("./../Controllers/categoryController");
const { Protect } = require("../Controllers/authController");

Router
    .route("/")
    .get(getCategories)
    .post(Protect,createCategory)
Router
    .route("/:id")
    .get(getCategory)
    .patch(Protect,updateCategory)
    .delete(Protect,deleteCategory)

module.exports=Router;