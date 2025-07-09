const mongoose = require('mongoose');

const userProduct = new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    productImage:{
        required:true,
    },
    price:{
        type:Number,
        default:0,
    },
    stock:{
         type:Number,
        default:0,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
}, {timestamps:true});

const Products = mongoose.model("Product", userProduct);