const { Double } = require('mongodb');
const mongoose = require('mongoose')


let category;
const customerSchema = new mongoose.Schema({
  
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
 
})




category = mongoose.model('Categiry', customerSchema,)

module.exports = category