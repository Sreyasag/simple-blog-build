const Blog = require("../models/blogsModel");


exports.create = async (req, res) => {
    try {
        
        const blog = await Blog.create(req.body);

        res.status(200).json(blog);
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message: error.message
        })
    }
};

exports.delete = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id)        
        
        res.status(200).json({ 
            status: "success",
        });
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message: error.message
        })
    }
};

exports.getAllBlogs = async (req, res) => {
    try {
        const all= await Blog.find()        
        
        res.status(200).json(all);
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message: error.message
        })
    }
};

exports.getOne = async (req, res) => {
    try {
        let data = await Blog.findById(req.params.id)
        if(!data) throw Error("No such blog found")        
        
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message: error.message
        })
    }
};

