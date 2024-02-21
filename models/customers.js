const { Double } = require('mongodb');
const mongoose = require('mongoose')


let customer;
const customerSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    Remaining_amount: {
        type: Number,
    },
    customer_amount: {
        type: Number,
    },
    address: {
        type: String,
    },
    is_delliverd: {
        type: Boolean,
        value:false,
    },
    phone: {
        type: String,
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