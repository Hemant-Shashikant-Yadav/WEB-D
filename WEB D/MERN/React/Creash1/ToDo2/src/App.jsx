import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

function App() {
  const todoItem = [
    {
      name: 'todo1',
      date: '12/2/2015'
    },
    {
      name: 'todo1',
      date: '12/2/2015'
    },
    {
      name: 'tosfsrdo1',
      date: '12/2/2015'
    },
    {
      name: 'todo1',
      date: '12/2/43434'
    },
    {
      name: 'todo1',
      date: '12/34/2015'
    },
    {
      name: 'rttrgf',
      date: '34/2/2015'
    },
  ]

  return (
    <>
      <center className='todo-container'>
        <AppName />


        <hr />
        <AddTodo />
        <hr />

        <TodoItem tditem={todoItem} />

      </center>
    </>
  )
}

export default App
