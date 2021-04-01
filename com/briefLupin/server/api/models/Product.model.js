const mongoose = require('mongoose');
const categoryModel = require('./category.model');
const UserModel = require('./User.model');

const Product = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    oldPrice:{
        type:Number,
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    id_category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:categoryModel,
    },
    id_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:UserModel,
    },
    create_at:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Product', Product);