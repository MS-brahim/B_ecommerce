const mongoose = require('mongoose');

const User = new mongoose.Schema({
    full_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    is_valid:{
        type:Boolean,
        default:false
    },
    cin:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'client'
    },
    dateCreate:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('User', User)