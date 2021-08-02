import React, { useState } from 'react';
import './App.css';
import Data from './components/data';
import Input from './components/input';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Input />
      <Data />
    </div>
  );
}

export default App;
