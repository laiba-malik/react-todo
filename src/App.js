import React, { Component } from 'react'
import Todos from "./components/Todos"
import Header from "./components/Header"
import Input from "./components/Input"
import {v4 as uuidv4 } from "uuid"
import './App.css'

class App extends Component {
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
      date: new Date()
    }

    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const json = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", json)
    }

  }

  componentWillMount() { 
    let store = localStorage.getItem('todos')
    if (store) {
      try {
        this.state.todos = JSON.parse(store)
      } catch(e) {
        localStorage.removeItem('todos')
      }
    }
  }

  sortArray () {
    this.state.todos.slice(
      this.state.todos.sort(
        (a, b) => b.date - a.date).reverse()
    )
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
        <button
          className = "sort"
          onClick =  {(e) => this.sortArray(this.state.todos)}
          >
          Sort
        </button>
        <Todos 
        todos = { this.state.todos } 
        markComplete = { this.markComplete }
        delete = { this.delete }
        edit = { this.edit }
        sortArray = { this.sortArray }
        />
      </div>
    )
  }
}
export default App
