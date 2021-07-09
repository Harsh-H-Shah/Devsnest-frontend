import "./index.css"
import React from "react";

function Card(props){
  console.log(props);
  return(
    <div className="card">
      <h1>{props.title}</h1>
      You have consumed {props.calories} calories today.
    </div>
  )
}

export default Card;