const mongoose = require('mongoose');

const userCategory = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
}, {timestamps:true})

const Category = mongoose.model("Category", userCategory);
mongoose.export = Category;