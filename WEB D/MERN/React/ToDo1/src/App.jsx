import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

function App() {

  return (
    <>
      <center class='todo-container'>
        <AppName />


        <hr />
        <AddTodo />
        <hr />

        <TodoItem />
        <TodoItem />
        <TodoItem />

      </center>
    </>
  )
}

export default App
