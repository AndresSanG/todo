import React from 'react'
import "../styles/header.css"

const Header = ({handleShowDone, handleShowTodo,handleShowAll,setShowTodo,showTodo}) => {
    return (
        <div className="header-bar">
            <h2>Todo list</h2>
            <div className="button-container">
            <button onClick={()=>handleShowDone(setShowTodo,showTodo)}>Done</button>
            <button onClick={()=>handleShowTodo(setShowTodo,showTodo)}>To do</button>
            <button onClick={()=>handleShowAll(setShowTodo,showTodo)}>All</button>
            </div>
        </div>
    )
}

export default Header
