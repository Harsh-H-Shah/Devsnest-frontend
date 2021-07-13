import "./index.css"
import './App.jsx';
import React from "react";

function Card({title, calories, idx, Delete}){
  return(
    <div className="card" style={{backgroundColor:(calories <= 100 ? "aquamarine" : "orangered")}}>
      <h1>{title}</h1>
      You have consumed {calories} calories today.
      <h4 style={{display:(calories <= 100 ? "none" : "inline-block")}}>Harmful</h4>
      <button onClick={() => Delete(title)}>Delete</button>
    </div>
  )
}

export default Card;