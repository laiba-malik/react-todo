import React, { Component } from 'react'
import PropTypes from "prop-types"

class TodoItem extends Component {
  
  getStyle = () => {
    return {
        textDecoration: this.props.todo.completed ? "line-through" : "none"
    }
  }

  editTitle = (e, title) => {
      e.preventDefault()
      if(e.keyCode === 13) {
          console.log(123)
      }
  }

  render () { 
    const del = {
        backgroundColor: "#ff0000",
        color: "#fff",
        border: "none",
        padding: "5px 10px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    }
    const { id, title } = this.props.todo
    const todo = {
        backgroundColor: "#c8a2c8",
        padding: "5px",
        color: "white",
        textAlign: "left",
        borderBottom: "1px #ccc dotted"
    }

    return (
        <div style={ this.getStyle() }>
            <p style= {todo}>
                <input 
                type="checkbox" 
                onChange={ this.props.markComplete.bind (this, id)}/> { " " }
                <span>
                    { title }
                </span>
                <button 
                style={ del }
                className = "del"
                onClick= { this.props.delete.bind (this,id)}
                >
                    X
                </button>
            </p>
        </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem