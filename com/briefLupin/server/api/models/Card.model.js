const mongoose = require('mongoose');
const ProductModel = require('./Product.model');
const UserModel = require('./User.model');

const Card = new mongoose.Schema({
    id_product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:ProductModel,
    },
    id_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:UserModel,
    },
    qty:{
        type:Number,
    },
    dateCreate:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Card', Card)