import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form';
import TaskList from './components/TaskList';
import Timer from './components/Timer';

function App() {
 
  //States
  const [inputText, setInputText] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  //Run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

   //useEffect
   useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter((task) => task.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter((task) => task.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
//Save to local
const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const getLocalTodos = () => {
  if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify([]));
  } else{
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  }
};

  return (
    <div className="App">
    <header>
    <h1>Tasks Reminder</h1>
    </header>
    <Timer/>
    <Form inputText={inputText} 
          todos={todos} 
          inputTime={inputTime}
          setTodos={setTodos} 
          setInputText={setInputText}
          setInputTime={setInputTime}
          setStatus={setStatus} />
    <TaskList setTodos={setTodos} 
          todos={todos}
          filterTodos={filterTodos} />
          
    </div>
  );
}

export default App;
