const mongoose = require('mongoose');
const ProductModel = require('./Product.model');

const Cart = new mongoose.Schema({
    id_product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:ProductModel,
    },
    qty:{
        type:Number,
    },
    dateCreate:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Cart', Cart)