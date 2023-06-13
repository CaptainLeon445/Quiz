const User=require("./../Models/userModel")
const mongoose=require("mongoose")

// create user
exports.createUser=async(req, res)=>{
    const doc=await User.create(req.body)
    try{
        res.status(200).json({
            message:"success",
            data: doc
        })
    }catch(err){
        res.status(400).json({
            message:"fail",
            err: err.message
        })
    }
}

// get all the users
exports.getAllUsers=async(req, res)=>{
    try{
        res.status(200).json({
            message:"success",
            data:"Route is yet to be defined"
        })
    }catch(err){
        res.status(400).json({
            message:"fail",
            err: err.message
        })
    }
}

// get a user
exports.getAUser=async(req, res)=>{
    try{
        res.status(200).json({
            message:"success",
            data:"Route is yet to be defined"
        })
    }catch(err){
        res.status(400).json({
            message:"fail",
            err: err.message
        })
    }
}

// update the user
exports.updateUser=async(req, res)=>{
    try{
        res.status(200).json({
            message:"success",
            data:"Route is yet to be defined"
        })
    }catch(err){
        res.status(400).json({
            message:"fail",
            err: err.message
        })
    }
}

// delete the user
exports.deleteUser=async(req, res)=>{
    try{
        res.status(200).json({
            message:"success",
            data:"Route is yet to be defined"
        })
    }catch(err){
        res.status(400).json({
            message:"fail",
            err: err.message
        })
    }
}

// get me
exports.getMe=async(req, res)=>{
    try{
        res.status(200).json({
            message:"success",
            data:"Route is yet to be defined"
        })
    }catch(err){
        res.status(400).json({
            message:"fail",
            err: err.message
        })
    }
}

// update me
exports.updateMe=async(req, res)=>{
    try{
        res.status(200).json({
            message:"success",
            data:"Route is yet to be defined"
        })
    }catch(err){
        res.status(400).json({
            message:"fail",
            err: err.message
        })
    }
}

// delete me
exports.deleteMe=async(req, res)=>{
    try{
        res.status(200).json({
            message:"success",
            data:"Route is yet to be defined"
        })
    }catch(err){
        res.status(400).json({
            message:"fail",
            err: err.message
        })
    }
}