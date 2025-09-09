import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App (){
  // const todos = [
  //   new Todo('Learn reacct'),
  //   new Todo('Learn typescript')
  // ]
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText : string)=>{
    const newTodo = new Todo(todoText)

    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo)
    })

    

  }
  return (
    <>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}>This is children props</Todos>
    </>
  );
}

export default App;
