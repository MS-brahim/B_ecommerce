const mongoose = require('mongoose');
const ProductModel = require('./Product.model');
const UserModel = require('./User.model');

const Order = new mongoose.Schema({
    id_product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:ProductModel,
    },
    id_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:UserModel,
    },
    address:{
        type:String,
        required:true
    },
    total_price:{
        type:Number,
        required:true
    },
    dateCreate:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Order', Order)