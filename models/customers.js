const { Double } = require('mongodb');
const mongoose = require('mongoose')


let customer;
const customerSchema = new mongoose.Schema({
  
    userName: {
        type: String,
        required: true
    },
    Remaining_amount: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    length: {
        type: Number,
    },
    ketf_length: {
        type: Number,
    },
   kom_length: {
        type: Number,
    },
   sadr_length: {
        type: Number,
    }, 
    neck_length: {
        type: Number,
    },
    hand_length: {
        type: Number,
    },
   kabk_length: {
        type: Number,
    },
    
})




 customer = mongoose.model('Customers', customerSchema,)

module.exports = customer