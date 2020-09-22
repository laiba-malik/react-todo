import React, { Component } from 'react'

class Header extends Component {
  render () { 
    const header = {
        backgroundColor: "#c8a2c8",
        color: "white",
        textAlign: "center",
        padding: "10px"
    }
    return (
        <div className = "Header" style = {header}>
            TodoList
        </div>
    )
  }
}

export default Header