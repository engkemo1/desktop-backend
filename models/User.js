const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    userId:{
        type:String
      }, 
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
   
})




let User = mongoose.model('User', userSchema)

module.exports = User