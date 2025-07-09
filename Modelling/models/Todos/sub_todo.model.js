 const mongoose = require('mongoose')

 const subTodosSchema = new mongoose.schema({
    content:{
        type: String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
 }, {timestamps:true})

 
  const subTodo = mongoose.model('subTodos', subTodosSchema)
  module.export = subTodo;