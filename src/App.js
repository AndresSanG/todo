import React, { useEffect, useState } from "react";

// Components
import Header from "./components/Header";
// import Loader from "./components/Loader";
import Todo from "./components/Todo"

//STYLES
import "./styles/app.css"


const App = () => {
  //STATE
  const [todoList, setTodoList] = useState([]);
  const [showTodo, setShowTodo] = useState(0);
  const [renderTodo, setRenderTodo] = useState([]);
  // EFFECT
  useEffect(() => {
      const handleTodoList = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const result = await response.json();
      const resultTodoList = result.slice(0, 20);
      setTodoList(resultTodoList);
    };
    // setTimeout(() => {
      handleTodoList()      
    // }, 3000);
  }, [])

  
  
  // FUNCIONES
  const handleShowDone = (setShowTodo,showTodo) => {
    setShowTodo(1)
    setRenderTodo(todoList.filter(singleTodo => singleTodo.completed === true))
    console.log(renderTodo)
  }
  const handleShowTodo = (setShowTodo) => {
    setShowTodo(2)
    setRenderTodo(todoList.filter(singleTodo => singleTodo.completed === false))
    console.log(showTodo)
    console.log(renderTodo)
  }
  const handleShowAll = (setShowTodo) => {
    setShowTodo(0)
    setRenderTodo(todoList)
    console.log(showTodo)
    console.log(renderTodo)
  }
  const handleCompleteTodo = (id) =>{
    console.log(id)
    setRenderTodo(todoList?.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo))
  }


  return (
    <div className="App">
      <Header 
      handleShowDone={handleShowDone}
      handleShowTodo={handleShowTodo}
      handleShowAll={handleShowAll}
      showTodo={showTodo}
      setShowTodo={setShowTodo}
      />
      <div className="todo-container">
        {
        renderTodo && showTodo === 0 ? renderTodo.map(singleTodo => (
          <Todo 
          key={singleTodo.id} 
          title={singleTodo.title} 
          status={singleTodo.completed} 
          handleCompleteTodo={handleCompleteTodo}          
          id={singleTodo.id}/>)) : null}
          {
        renderTodo && showTodo === 1 ? renderTodo.map(singleTodo => (
          <Todo 
          key={singleTodo.id} 
          title={singleTodo.title} 
          status={singleTodo.completed} 
          handleCompleteTodo={handleCompleteTodo}          
          id={singleTodo.id}/>)) : null}
          {
        renderTodo && showTodo === 2 ? renderTodo.map(singleTodo => (
          <Todo 
          key={singleTodo.id} 
          title={singleTodo.title} 
          status={singleTodo.completed} 
          handleCompleteTodo={handleCompleteTodo}          
          id={singleTodo.id}/>)) : null}
      </div>
    </div>
  );
}


export default App;
