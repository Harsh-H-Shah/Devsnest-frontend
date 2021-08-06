import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="container">
        <h1>To-do list</h1>
        <AddTodo />
        <ListTodo />
      </div>
    </div>
  );
}

export default App;
