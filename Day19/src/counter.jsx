import React, { useState } from "react";
import "./index.css";

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state={
      counter:0,
    }
  }
  render(){
    const counter = this.state.counter;
    return(
    <button className="counter" onClick={()=> {this.setState({counter:this.state.counter + 1})}}>{this.state.counter}</button>
    );
  }
}

export default Counter;