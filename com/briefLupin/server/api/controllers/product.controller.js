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

// GET DATA LIMIT 3
const getProductLimit3 = async (req,res)=>{
    try {
        const products = await Product.find();
        res.json(products) 
        console.log(products);
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
const saveProduct = async (req, res)=>{
    
    const newProduct= new Product(
        {
            name        :req.body.name,
            image       :req.body.image,
            price       :req.body.price,
            discription :req.body.discription,
            id_category :req.body.id_category,
            id_user     :req.body.id_user,
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
            image       :req.body.image,
            price       :req.body.price,
            discription :req.body.discription,
            id_category :req.body.id_category,
            id_user     :req.body.id_user,
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
    getProductById,
    getProductLimit3,
    saveProduct,
    updateProduct,
    deleteProduct,
};