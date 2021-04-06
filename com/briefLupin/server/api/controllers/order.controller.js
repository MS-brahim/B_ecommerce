const Order = require('../models/Order.model');

// GET ALL DATA 
const getOrders = async (req, res) => {
    try {
        res.json(await Order.find());
    } catch (error) {
        res.json({message:error})
    }
}

// GET DATA BY ID
const getOrderById = async (req, res) => {
    try {
        res.json(await Order.findById({_id:req.params.id}));
    } catch (error) {
        res.json({message:error})
    }
}

// // POST NEW DATA 
const saveOrder = async (req, res)=>{

    const newOrder = new Order({name:req.body.name, image:req.body.image});

    try {
        res.json(await newOrder.save());
    } catch (error) {
        res.json({message:error})
    } 
};

module.exports = { getOrders, getOrderById, saveOrder };