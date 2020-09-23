const mongoose = require("mongoose")
var uuid = require('node-uuid');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true, 
        required: true,
    },
    completed: {
        type: Boolean, 
        default: false, 
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
})

const todoModel = mongoose.model("Todo", todoSchema) 
module.exports = todoModel 