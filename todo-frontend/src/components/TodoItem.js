import React, { Component } from 'react'
import PropTypes from "prop-types"

class TodoItem extends Component {
    state = {
        editing: false
    }

  getStyle = () => {
    return {
        textDecoration: this.props.todo.completed ? "line-through" : "none"
    }
  }

  componentDidMount() {
      this.setState({ changedText: this.props.todo.title })
  }

  handleEditing(e) {
      this.setState({ editing: true, changedText: this.props.todo.title })
  }

  handleEditingDone(e, id) {
      if ( e.keyCode === 13 )
        this.setState({ editing: false })
}

handleEditingChange(e) {
    let changed = e.target.value
    this.setState({ changedText: changed })
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
    const { _id } = this.props.todo

    const todo = {
        backgroundColor: "#c8a2c8",
        padding: "5px",
        color: "white",
        textAlign: "left",
        borderBottom: "1px #ccc dotted"
    }

    var viewStyle={}
    var editStyle={}

    if( this.state.editing ) { viewStyle.display = "none" } 
    else { editStyle.display="none" }

    return (
        <div>

        <div style={ Object.assign ( this.getStyle(), viewStyle )} onDoubleClick={ this.handleEditing.bind(this) }>
            <p style= { todo }>
                <input 
                type = "checkbox" 
                onChange = { this.props.markComplete.bind (this, _id)}/> { " " }
                <span>
                    { this.state.changedText }
                </span>
                <button 
                style = { del }
                className = "del"
                onClick = { this.props.delete.bind( this, _id )}
                >
                X
                </button>
            </p>
        </div>

        <form onSubmit = {this.props.edit.bind( this, this.props.todo._id, this.state.changedText )}>
        <input
        type = "text" 
        style = {editStyle}
        value = {this.state.changedText}
        onKeyDown = { 
                      this.handleEditingDone.bind(this)
                    }
        onChange = { this.handleEditingChange.bind( this )}
        />
        </form>
    </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem