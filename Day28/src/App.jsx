import React, { useState } from 'react';
import './App.css';
import Weather from './components/weather';

function App() {
  return (
    <div className="App">
      <h1>Weather Today</h1>
      <Weather />
    </div>
  );
}

export default App;
