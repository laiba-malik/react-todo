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
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] })
    // this.saveTodos()

  }

  componentDidUpdate(prevProps, prevState) {
    console.log(123)
    if (prevState.todos.length !== this.state.todos.length) {
      console.log(345)
      const json = JSON.stringify(this.state.todos);
      console.log(json)
      localStorage.setItem("todos", json);
    }
  }
  

  saveTodos = () => {
    const parsed = JSON.stringify(this.state.todos)
    // console.log(this.state.todos)
    localStorage.setItem("todos", parsed)
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
