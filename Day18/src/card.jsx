import "./index.css"
import React from "react";

function Card(props){
  console.log(props);
  return(
    <div className="card" style={{backgroundColor:(props.calories <= 100 ? "aquamarine" : "orangered")}}>
      <h1>{props.title}</h1>
      You have consumed {props.calories} calories today.
      <h4 style={{display:(props.calories <= 100 ? "none" : "inline-block")}}>Harmful</h4>
    </div>
  )
}

export default Card;