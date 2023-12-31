const mongoose = require('mongoose')


const customerSchema = new mongoose.Schema({
  
    userName: {
        type: String,
        required: true
    },
    Remaining_amount: {
        type: String,
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




let customer = mongoose.model('Customers', customerSchema,)

module.exports = customer