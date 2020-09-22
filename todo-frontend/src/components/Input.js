import React, { Component } from 'react'
import axios from "axios"

class Input extends Component {
  state = {
      title: ""
  }

  changeTitle = (e) => {
      this.setState({ [e.target.name]: e.target.value })
  } 

  addTodo = (e) => {
      e.preventDefault()
      this.props.addTodo( this.state.title )
      this.setState({ title: "" })
  }


  render () {
    const btn = {
        flex: "1"
    }

    const input = {
        flex: "10"
    }

    return (
        <form 
        style = {{ display:"flex" }}
        onSubmit = { this.addTodo }
        >
            <input 
            style = { input }
            type = "text" 
            name = "title" 
            placeholder = "Add a Todo..." 
            value = { this.state.title }
            onChange = { this.changeTitle }
            />
            <input
            className = "btn"
            style = { btn }
            type = "submit"
            value = "Submit" 
            />
        </form>
    )
  }
}

export default Input