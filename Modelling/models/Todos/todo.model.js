 const mongoose = require('mongoose')

 const todoSchema = new mongoose.schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodo:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"subTodos"
    }
 },{ timestmps:true})

 const todo = mongoose.model('Todo',todoSchema)
 module.export = todo;