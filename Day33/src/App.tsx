import React, { useState, useContext } from 'react';
import Themecontext from './context/ThemeContext';
import './App.css';
import ThemeToggle from './components/ThemeToggle';
import TodoList from './components/TodoList';

interface TodoType {
  title:string,
  done:boolean
}

function App() {
  const [theme, setTheme] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <Themecontext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <div className="todos">
          {todos.map((todo, index) => (
            <TodoList title={todo.title} done={todo.done} />
          ))}
        </div>
        <ThemeToggle />
      </div>
    </Themecontext.Provider>
  );
}

export default App;
