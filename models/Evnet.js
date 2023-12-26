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
        type: Number,
        required: true
    },
   amount_paid: {
        type: Number,
        required: true
    },
    Remaining_amount : {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    prize: {
        type: Number,
        required: true
    },
    num_dresses: {
        type: Number,
        required: true
    },  length: {
        type: Number,
        required: true
    },
    chest_length : {
        type: Number,
        required: true
    },  neck: {
        type: Number,
        required: true
    },  hand_length: {
        type: Number,
        required: true
    },  k_length: {
        type: Number,
        required: true
    },  m_length: {
        type: Number,
        required: true
    },
    details: {
        type: String,
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
