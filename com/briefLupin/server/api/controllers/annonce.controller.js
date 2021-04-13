const Annonce = require('../models/Annonce.model');

// GET DATA
const getAnnonces = async (req, res) => {
    try {
        const annonces = await Annonce.find();
        res.json(annonces);
    } catch (error) {
        res.json({message:error})
    }
}

// GET DATA BY ID
const getAnnonceById = async (req, res) => {
    try {
        const annonce = await Annonce.findOne({_id:req.params.id});
        res.json(annonce);
    } catch (error) {
        res.json({message:error})
    }
}

// // POST NEW DATA 
const saveAnnonce = async (req, res)=>{

    // console.log(req.files);
    const newAnnonce= new Annonce(
        {
            title        :req.body.title,
            image        :req.files.image.name,
            description  :req.body.description,
            price        :req.body.price,
            
        });

    try {
        const saveAnnonce = await newAnnonce.save();
        res.json(saveAnnonce);
    } catch (error) {
        res.json(error.message)
    } 
};

// UPDATE Annonce QTY 
const updateAnnonce= async (req, res) => {
    try {
        const annonce= await Annonce.updateOne({_id:req.params.id}, {$set:{
            title        :req.body.title,
            image        :req.body.image,
            description  :req.body.description,
            price        :req.body.price,
        }});
        res.json(annonce);
    } catch (error) {
        res.json({message:error})
    }
}

// DELETE DATA BY ID
const deleteAnnonce = async (req, res) => {
    try {
        const annonce = await Annonce.deleteOne({_id:req.params.id});
        res.json(annonce);
    } catch (error) {
        res.json({message:error})
    }
}

module.exports = {
    getAnnonceById,
    getAnnonces,
    saveAnnonce,
    updateAnnonce,
    deleteAnnonce,
};