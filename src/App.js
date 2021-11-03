import React, { useEffect, useState } from "react";

// Components
import Header from "./components/Header";
import Loader from "./components/Loader";
import Todo from "./components/Todo"

//STYLES
import "./styles/app.css"


const App = () => {
  //STATE
  const [todoList, setTodoList] = useState(null);
  // EFFECT
  useEffect(() => {
      const handleTodoList = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const result = await response.json();
      const resultTodoList = result.slice(0, 20);
      setTodoList(resultTodoList);
    };
    setTimeout(() => {
      handleTodoList()      
    }, 3000);
  }, [])
  
  // FUNCIONES
  const handleCompleteTodo = (id) =>{
    setTodoList(todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo))
  }


  return (
    <div className="App">
      <Header/>
      <div className="todo-container"> {
        todoList ? todoList.map(singleTodo => (
          <Todo 
          key={singleTodo.id} 
          title={singleTodo.title} 
          status={singleTodo.completed} 
          handleCompleteTodo={handleCompleteTodo}
          id={singleTodo.id}/>)) : <Loader/>}
      </div>
    </div>
  );
}

export default App;
