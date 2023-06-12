const categories=require("../Models/categoriesModel")
const slugify=require("slugify")


exports.createCategory=async(req, res)=>{
    try{
        const doc=await categories.create(req.body)
        res.status(200).json({
            message: "success",
            data: doc
        })
    }catch(err) {
        res.status(400).json({
            message: "fail",
            err
        })
    }
}

exports.getCategories=async(req, res)=>{
    try{
        const filter=req.query
        let doc=await categories.find()
        if (filter){
            doc=await categories.find(filter)
        }
        if (doc.length !==0 ){
            res.status(200).json({
                message: "success",
                data: doc
            })
        }
        res.status(400).json({
            message: "fail",
            data: "No data"
        })
    }catch(err) {
        res.status(400).json({
            message: "fail",
            err
        })
    }
}

exports.getCategory=async(req, res)=>{
    try{
        const id=req.params.id
        const doc=await categories.findById(id)
        res.status(200).json({
            message: "success",
            data: doc
        })
    }catch(err) {
        res.status(400).json({
            message: "fail",
            err
        })
    }
}
exports.updateCategory=async(req, res)=>{
    try{
        const id=req.params.id
        const content=req.body
        content.slug=slugify(req.body.name)
        const doc=await categories.findByIdAndUpdate(id, content,{
            upsert: true,
            new: true
        })
        res.status(200).json({
            message: "success",
            data: doc
        })
    }catch(err) {
        res.status(400).json({
            message: "fail",
            err
        })
    }
}
exports.deleteCategory=async(req, res)=>{
    try{
        const id=req.params.id
        const doc=await categories.findByIdAndDelete(id)
        res.status(200).json({
            message: "success",
            data: null
        })
    }catch(err) {
        res.status(400).json({
            message: "fail",
            err
        })
    }
}