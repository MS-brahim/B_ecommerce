const Product = require('../models/Product.model');

// GET DATA
const getProduct = async (req,res)=>{
    try {
        const products = await Product.find();
        res.json(products) 
    } catch (error) {
        res.json({message:error})
    }
};

// GET DATA BY ID
const getProductById = async (req, res) => {
    try {
        const product= await Product.findById({_id:req.params.id});
        res.json(product);
    } catch (error) {
        res.json({message:error})
    }
}

// // POST NEW DATA 
const saveProduct= async (req, res)=>{

    const newProduct= new Product(
        {
            name        :req.body.name,
            price       :req.body.price,
            discription :req.body.discription,
            id_vendeur  :req.body.id_vendeur,
            id_category :req.body.id_category,
            image       :req.body.image,
        });

    try {
        const saveProd = await newProduct.save();
        res.json(saveProd);
    } catch (error) {
        res.json({message:error})
    } 
};

// UPDATE DATA
const updateProduct= async (req, res) => {
    try {
        const product= await Product.updateOne({_id:req.params.id}, {$set:{
            name        :req.body.name,
            price       :req.body.price,
            discription :req.body.discription,
            id_vendeur  :req.body.id_vendeur,
            id_category :req.body.id_category,
            image       :req.body.image,
        }});
        res.json(product);
    } catch (error) {
        res.json({message:error})
    }
}

// DELETE DATA BY ID
const deleteProduct= async (req, res) => {
    try {
        const product= await Product.deleteOne({_id:req.params.id});
        res.json(product);
    } catch (error) {
        res.json({message:error})
    }
}

module.exports = {
    getProduct,
    saveProduct,
    getProductById,
    updateProduct,
    deleteProduct,
};