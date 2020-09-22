import React, { Component } from 'react'
import Todos from "./components/Todos"
import Header from "./components/Header"
import Input from "./components/Input"
import {v4 as uuidv4 } from "uuid"
import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Todo 1",
        completed: false
      }
    ]
  }
  markComplete = (id) => {
    this.setState({ 
      todos: this.state.todos.map(todo => {
        
      if(todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo
    }) 
  })
  }

  delete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(
        todo => todo.id !== id
      )]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
      date: new Date().toLocaleTimeString()
    }

    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  sortArray () {
    try {
      if (this.state.todos)  {
        this.setState({
          todos: this.state.todos.slice(
            this.state.todos.sort(
              (a, b) => a.date-b.date).reverse()
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
        this.state.todos = JSON.parse(store)
      } catch(e) {
        localStorage.removeItem('todos')
      }
    }
  }


  edit = (id, title) => {
    this.setState({ 
      todos: this.state.todos.splice( 
        this.state.todos.find( todo => 
          {
            if (todo.id === id) {
              todo.title = title
            }
          }
        ) 
      ) 
    })
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
        edit = { this.edit }
        sortArray = { this.sortArray.bind(this) }
        />
      </div>
    )
  }
}
export default App
