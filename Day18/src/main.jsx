import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Card from "./card";
import Chessboard from './chessboard';

function App(){
  return (
    <div className="container">
      <Chessboard/>
      <Card title="Pizza" calories="120"/>
      <Card title="Burger" calories="161"/>
      <Card title="Rice" calories="80"/>
      <Card title="Oats" calories="100"/>
      <Card title="Pastry" calories="300"/>
      <Card title="Carrot" calories="62"/>
      <Card title="Cheese-cake" calories="524"/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
