import React, { Component } from 'react'
import Todos from "./components/Todos"
import Header from "./components/Header"
import Input from "./components/Input"
import {v4 as uuidv4 } from "uuid"
import './App.css'

class App extends Component {
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }
      ) 
    } )
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
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      const json = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", json)
    }
  }

  componentWillMount() { 
    this.state.store = localStorage.getItem('todos')
    if (this.state.store) {
      try {
        this.state.todos = JSON.parse(this.state.store)
      } catch(e) {
        localStorage.removeItem('todos')
      }
    }
  }
  
  state = {
    todos: [
      {
        id: 1,
        title: "Todo 1",
        completed: false
      }
    ]
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
        />
      </div>
    )
  }
}
export default App
