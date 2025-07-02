const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName:String,
    Name:String,
    Age:Number,
    Email:String,
    PassWord:String
})

module.exports = mongoose.model("user", userSchema);