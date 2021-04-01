const Card = require('../models/Card.model');

// GET DATA BY ID
const getCardById = async (req, res) => {
    try {
        const card= await Card.findById({_id:req.params.id});
        res.json(card);
    } catch (error) {
        res.json({message:error})
    }
}

// // POST NEW DATA 
const saveCard = async (req, res)=>{
    
    const newCard= new Card(
        {
            id_product        :req.body.id_product,
            id_user           :req.body.id_user,
            qty               :req.body.qty,
            
        });

    try {
        const saveCard = await (await newCard.save()).populate('id_product');
        res.json(saveCard);
    } catch (error) {
        res.json({message:error})
    } 
};

// UPDATE DATA
const updateCard= async (req, res) => {
    try {
        const card= await Card.updateOne({_id:req.params.id}, {$set:{
            id_product        :req.body.id_product,
            id_user           :req.body.id_user,
            qty               :req.body.qty,
        }});
        res.json(card);
    } catch (error) {
        res.json({message:error})
    }
}

// DELETE DATA BY ID
const deleteCard= async (req, res) => {
    try {
        const card= await Card.deleteOne({_id:req.params.id});
        res.json(card);
    } catch (error) {
        res.json({message:error})
    }
}

module.exports = {
    getCardById,
    saveCard,
    updateCard,
    deleteCard,
};