const db = require("../models/")

function success(res, payload) {
    return res.status(200).json(payload)
}

exports.createTodo = async (req, res, next) => {
    try {
        console.log(req.body)
        const todo = await db.Todo.create(req.body)
        // console.log(JSON.stringify(todo))
        return success(res, todo)
        } catch (err) {
        next({ status: 400, message: "failed to create todo" })
    }
  }

exports.getTodos = async(req, res, next) => {
    try {
        const todos = await db.Todo.find({})
        console.log(todos)
        return success(res, todos)
    } catch (err) {
        next({ status:400, message: "failed to get todos"})
    }
}

exports.updateTodo = async(req, res, next) => {
    try {
        const todo = await db.Todo.findByIdAndUpdate (
            req.params.id, 
            req.body, 
            {new:true})
        return success(res, todo)
    } catch (err) {
        next({ status:400, message: "failed to update the todo"})
    }
}

exports.deleteTodo = async (req, res, next) => {
    try {
      await db.Todo.findByIdAndRemove(req.params.id)
      return success(res, "todo deleted!")
    } catch (err) {
      next({ status: 400, message: "failed to delete todo" })
    }
  }
