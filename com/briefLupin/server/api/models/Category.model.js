const mongoose = require('mongoose');

const Category = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    create_at:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Category', Category);