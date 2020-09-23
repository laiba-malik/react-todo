const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    id: {
        type: String
    },
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