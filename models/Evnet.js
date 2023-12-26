const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    prize: {
        type: Date,
        required: true
    },
   amount_paid: {
        type: Date,
        required: true
    },
    Remaining_amount : {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    prize: {
        type: Date,
        required: true
    },
    num_dresses: {
        type: Date,
        required: true
    },  length: {
        type: Date,
        required: true
    },
    chest_length : {
        type: Date,
        required: true
    },  neck: {
        type: Date,
        required: true
    },  hand_length: {
        type: Date,
        required: true
    },  k_length: {
        type: Date,
        required: true
    },  m_length: {
        type: Date,
        required: true
    },
    details: {
        type: Date,
        required: true
    },
    user_id : {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
    image:{
        type:String,
        required:true
    }
})

let Event = mongoose.model('Event', eventSchema, 'events')

module.exports = Event
