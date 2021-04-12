const mongoose = require('mongoose');

const Annonce = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    startDate:{
        type:Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Annonce', Annonce);