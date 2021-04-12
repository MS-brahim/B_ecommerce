const Product = require('../models/Product.model');

// GET DATA
const getProduct = async (req,res)=>{
    try {

        const products = await Product.find().populate('id_user');
        res.json(products) 
    } catch (error) {
        res.json({message:error})
    }
};

// GET DATA LIMIT 3
const getSingleProduct = async (req,res)=>{
    try {

        // const limit = req.query.limit ? parseInt(req.query.limit): 1;
         const products = await Product.aggregate([{ $sample: { size: 1 } }]);
        res.json(products) 
    } catch (error) {
        res.json({message:error})
        console.log(error.message);
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
            image       :req.file.filename,
            name        :req.body.name,
            oldPrice    :req.body.oldPrice,
            price       :req.body.price,
            description :req.body.description,
            id_user     :req.body.id_user,
        });
        console.log(req.body);
        console.log(req.file.filename);

    try {
        const saveProd = await newProduct.save();
        res.json(saveProd);
    } catch (error) {
        res.json(error.message)
    } 
};

// UPDATE DATA
const updateProduct= async (req, res) => {
    try {
        const product= await Product.updateOne({_id:req.params.id}, {$set:{
            image       :req.body.image,
            name        :req.body.name,
            oldPrice    :req.body.oldPrice,
            price       :req.body.price,
            description :req.body.description,
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
    getSingleProduct,
    saveProduct,
    updateProduct,
    deleteProduct,
};