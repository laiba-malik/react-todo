import React, { Component } from 'react'
import TodoItem from "./TodoItem"
import PropTypes from "prop-types"

class Todos extends Component {
  render () { 
    return (
        <div>
            {/* <p>
               <button
               className = "sort"
               onClick = { this.props.sortArray.bind(this.props.todos) }
               >
                   Sort
               </button>
            </p> */}

        {this.props.todos.map((todo) => (
            <TodoItem
            key = { todo.id } 
            todo = { todo }
            markComplete = { this.props.markComplete}
            edit = { this.props.edit }
            delete = { this.props.delete}
            />
        )) }
        </div>
    )
  }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos