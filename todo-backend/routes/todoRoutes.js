const express = require("express")
const todoController = require('../controllers/todoController')

const router = express.Router()

router.route('/todos').get(todoController.getTodos)
router.route('/todos').post(todoController.createTodo)
router.route('/todos/:id').put(todoController.updateTodo)
router.route('/todos/:id').delete(todoController.deleteTodo)

module.exports = router;