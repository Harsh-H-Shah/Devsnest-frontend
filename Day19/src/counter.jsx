import React, { useState } from "react";
import "./index.css";

function Counter(){
  const [counter, setcounter] = useState(0)
  return (
    <button className="counter" onClick={()=>{setcounter(counter+1)}}>{counter}</button>
  )
}

export default Counter;