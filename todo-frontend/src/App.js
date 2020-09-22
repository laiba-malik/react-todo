import React, { Component } from 'react'
import Todos from "./components/Todos"
import Header from "./components/Header"
import Input from "./components/Input"
import axios from "axios"
import API from "./API"
import './App.css'

class App extends Component {
  state = {
    todos: []
  }
  markComplete = async (id) => {
  const payload = {
    completed: !this.state.todos.find(todo => todo._id === id).completed,
  }
  const updatedTodo = await API.updateTodo(id, payload)
  this.setState(this.state.todos.map(todo => (todo._id === id ? updatedTodo : todo)))
  }

  delete = async (id) => {
    await API.deleteTodo(id)
    this.setState({
      todos: [...this.state.todos.filter(
        todo => todo._id !== id
      )]
    })
  }

  addTodo = async (title) => {
    const newTodo = {
      title: title,
      completed: false
    }

    axios.post("/todos", newTodo)
    .then(res => {
      this.setState({ todos: [...this.state.todos, res.data] })})
  }

  sortArray () {
    try {
      if (this.state.todos)  {
        this.setState({
          todos: this.state.todos.slice(
            this.state.todos.sort(
              (a, b) => console.log(a.date-b.date)).reverse()
            ) }
          )
        }
      }
      catch(e) {console.log(e)}
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const json = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", json)
    }

  }

  UNSAFE_componentWillMount() { 
    let store = localStorage.getItem('todos')
    if (store) {
      try {
        this.setState({ todos: JSON.parse(store) })
      } catch(e) {
        localStorage.removeItem('todos')
      }
    }
  }


  edit = async(id, title) => {
    const payload = {
      title: title
      }
      const updatedTodo = await API.updateTodo(id, payload)
      this.setState(this.state.todos.map(todo => (todo._id === id ? updatedTodo : todo)))
    }
    // this.setState({ 
    //   todos: this.state.todos.splice( 
    //     this.state.todos.find( todo => 
    //       {
    //         if (todo._id === id) {
    //           todo.title = title
    //         }
    //       }
    //     ) 
    //   ) 
    // })
  // }

  componentDidMount() {
    axios.get("/todos")
    .then(res => this.setState({todos: res.data}))
  }

  render () {

    return (
      <div className="App">
        <Header />
        <Input addTodo = { this.addTodo }/>
        <Todos 
        todos = { this.state.todos } 
        markComplete = { this.markComplete }
        delete = { this.delete }
        edit = { this.edit.bind(this) }
        sortArray = { this.sortArray.bind(this) }
        />
      </div>
    )
  }
}
export default App
