const mongoose = require('mongoose');
const categoryModel = require('./category.model');

const Product = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    id_category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:categoryModel,
    },
    create_at:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Product', Product);