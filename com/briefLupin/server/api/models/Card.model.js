const mongoose = require('mongoose');

const Card = new mongoose.Schema({
    id_product:{
        type:String,
        required:true,
    },
    id_client:{
        type:String,
        required:true,
        unique:true,
    },
    qty:{
        type:Number,
        required:true,
        unique:true
    },
    dateCreate:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Card', Card)