const Category = require('../models/category.model');

// GET DATA 
const getCategory = async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category);
    } catch (error) {
        res.json({message:error})
    }
}

// GET DATA BY ID
const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById({_id:req.params.id});
        res.json(category);
    } catch (error) {
        res.json({message:error})
    }
}

// // POST NEW DATA 
const saveCategory = async (req, res)=>{

    const newCategory = new Category({name:req.body.name, image:req.body.image});

    try {
        const saveCateg = await newCategory.save();
        res.json(saveCateg);
    } catch (error) {
        res.json({message:error})
    } 
};

// UPDATE DATA
const updateCategory = async (req, res) => {
    try {
        const category = await Category.updateOne({_id:req.params.id}, {$set:{name:req.body.name, image:req.body.image}});
        res.json(category);
    } catch (error) {
        res.json({message:error})
    }
}

// DELETE DATA BY ID
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.deleteOne({_id:req.params.id});
        res.json(category);
    } catch (error) {
        res.json({message:error})
    }
}

module.exports = {
    getCategory,
    saveCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
};