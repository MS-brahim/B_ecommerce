const mongoose = require('mongoose');

const Annonce = new mongoose.Schema({
    title:{
        type:String,
        // required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        // required:true
    },
    price:{
        type:Number,
        // required:true
    },
    create_at:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Annonce', Annonce);