import axios from "axios"

async function createTodo(title) {
  const {data: newTodo} = await axios.post(`/todos`, {
    title
  })
  return newTodo
}

async function deleteTodo(id) {
  const message = await axios.delete(`/todos/${id}`)
  return message
}

async function updateTodo(id, payload) {
  const { data: newTodo } = await axios.put(`/todos/${id}`, payload)
  return newTodo
}

export default { createTodo, deleteTodo, updateTodo }