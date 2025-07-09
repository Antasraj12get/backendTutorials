const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: {
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    isActive:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
},
{timestamps:true}
)

const User = mongoose.model("User", userSchema);
module.exports = User;