const db = require("./models/")

const express = require("express") 
const app = express() 

const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000 

const cors = require("cors")
app.use(cors())

app.use(bodyParser.json()) 

function success(res, payload) {
    return res.status(200).json(payload)
}

app.post("/todos", async(req, res, next) => {
    try {
        const todo = await db.Todo.create(req.body)
        return success (res, todo)
    } catch (err) {
        next({ status: 400, message: "failed to create Todo"})
    }
})

app.get("/todos", async(req, res, next) => {
    try {
        const todos = await db.Todo.find({})
        return success(res, todos)
    } catch (err) {
        next({ status:400, message: "failed to get todos"})
    }
})

app.put("/todos/:id", async(req, res, next) => {
    try {
        const todo = await db.Todo.findByIdAndUpdate (
            req.params.id, 
            req.body, 
            {new:true})
        console.log(todo)
        return success(res, todo)
    } catch (err) {
        next({ status:400, message: "failed to update the todo"})
    }
})


app.delete("/todos/:id", async (req, res, next) => {
    try {
      await db.Todo.findByIdAndRemove(req.params.id)
      return success(res, "todo deleted!")
    } catch (err) {
      next({ status: 400, message: "failed to delete todo" })
    }
  })

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`) 
})