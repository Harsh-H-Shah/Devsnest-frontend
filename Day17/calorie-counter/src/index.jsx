import React from 'react'
import ReactDOM from 'react-dom'
import Card from "./card";
import './index.css'

function App(){
  return (
    <div className="container">
      <Card title="Pizza" calories="120"/>
      <Card title="Burger" calories="161"/>
      <Card title="Pasta" calories="80"/>
      <Card title="Franky" calories="100"/>
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
