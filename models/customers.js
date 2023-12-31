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
   
})




 customer = mongoose.model('Customers', customerSchema,)

module.exports = customer