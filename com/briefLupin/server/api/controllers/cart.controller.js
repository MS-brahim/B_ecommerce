const Cart = require('../models/Cart.model');

// GET DATA
const getCart = async (req, res) => {
    try {
        const cart= await Cart.find().populate('id_product');
        res.json(cart);
    } catch (error) {
        res.json({message:error})
    }
}

// GET DATA BY ID
const getCartById = async (req, res) => {
    try {
        const cart= await Cart.findById({_id:req.params.id});
        res.json(cart);
    } catch (error) {
        res.json({message:error})
    }
}

// // POST NEW DATA 
const saveCart = async (req, res)=>{
    
    const newCart= new Cart(
        {
            id_product        :req.body.id_product,
            qty               :req.body.qty,
            
        });

    try {
        const saveCart = await (await newCart.save()).populate('id_product');
        res.json(saveCart);
    } catch (error) {
        res.json({message:error})
    } 
};

// CART INCREMENT
const incrementCart= async (req, res) => {
    try {
        await Cart.updateOne({_id:req.params.id}, {$push:{
            id_product:req.body.id_product,
        }}, (err, cart) => {
            res.json({
                cart
            });
        });
        
    } catch (error) {
        res.json({message:error})
    }
}

// UPDATE CART QTY 
const updateCart= async (req, res) => {
    try {
        const cart= await Cart.updateOne({_id:req.params.id}, {$set:{
            qty:req.body.qty,
        }});
        res.json(cart);
    } catch (error) {
        res.json({message:error})
    }
}

// DELETE DATA BY ID
const deleteCart= async (req, res) => {
    try {
        const cart= await Cart.deleteOne({_id:req.params.id});
        res.json(cart);
    } catch (error) {
        res.json({message:error})
    }
}

module.exports = {
    getCartById,
    getCart,
    saveCart,
    incrementCart,
    updateCart,
    deleteCart,
};