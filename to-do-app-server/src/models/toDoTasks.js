const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let toDoTasksSchema = new Schema({
    taskName: {type:String, required: true},
    taskDesc: {type:String, required: true},
    dueDate: {type:String, required: true},
    taskCompletionRate: {type:Number, required: true},
},
{ collection: 'To-Do-Task' });

module.exports= mongoose.model('To-Do-Task', toDoTasksSchema);