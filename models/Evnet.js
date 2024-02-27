const { Double } = require('mongodb')
const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    is_delliverd: {
        type: Boolean,
        
    },
    code: {
        type: Number,
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
    },
   amount_paid: {
        type: Number,
    },
    Remaining_amount : {
        type: Number,
    },
    date: {
        type: Date,
    },
    prize: {
        type: Number,
    },
    num_dresses: {
        type: Number,
    },  length: {
        type: Number,
    },
    chest_length : {
        type: Number,
    },
    ketf_length : {
        type: Number,
    }, 
   kom_length : {
        type: Number,
    }, 
    neck: {
        type: Number,
    }, 
     hand_length: {
        type: Number,
    }, 
    hand2_length: {
        type: Number,
    }, 
    dropp_taqwera1:{
        type: Number,

    },
    dropp_taqwera2:{
        type: Number,

    }, dropp_taqwera3:{
        type: Number,

    },
    badn_size1:{
        type: Number,

    },
    badn_size2:{
        type: Number,

    },
    badn_size3:{
        type: Number,

    },
     k_length: {
        type: Number,
    }, 
  
    k2_length: {
        type: Number,
    }, 
     m_length: {
        type: Number,
    },
    kom_size: {
        type: Number,
    }, 
   glab_size: {
        type: Number,
    }, 
    yaqa_size: {
        type: Number,
    }, 
    ganb_size: {
        type: Number,
    }, 
  
   gayb_size: {
        type: Number,
    }, 
  sadr_size: {
        type: Number,
    }, 
   taqwera_size: {
        type: Number,
    }, 
    details: {
        type: String,
    },
    glab: {
        
        type: String,

    },   
    yaqa: {
        type: String,

    },
       gayb: {
        type: String,

    },
       ganb: {
        type: String,

    },
    sadr: {
        type: String,

    },
    taqwera: {
        type: String,

    },  
    kom : {
        type: String,
    },
    created_at: {
        type: Date,
    },
    delivery_time: {
        type: Date,
    },
    type: {
        type: String,
    }, 
  
    additional_type1: {
        type: String,
    },
    additional_type2: {
        type: String,
    },
    fyber_type: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    worker_cost:{
        type: Number,

    },
    total:{
        type: Number,

    },


    image:{
        type:String,
    }
})

let Event = mongoose.model('Event', eventSchema, 'events')

module.exports = Event
