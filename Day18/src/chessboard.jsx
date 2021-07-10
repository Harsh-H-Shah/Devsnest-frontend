import "./index.css"
import React from "react";

function Chessboard(){
  return (
    <div className="board">
      <Row index="1"/>
      <Row index="2"/>
      <Row index="3"/>
      <Row index="4"/>
      <Row index="5"/>
      <Row index="6"/>
      <Row index="7"/>
      <Row index="8"/>
    </div>
    );
}

function Row(props){
  return(
    <div className="row">
      <div className="place" position="1" style={{backgroundColor:(props.index % 2 == 0 ? "black" : "white")}}></div>
      <div className="place" position="2" style={{backgroundColor:(props.index % 2 == 0 ? "white" : "black")}}></div>
      <div className="place" position="3" style={{backgroundColor:(props.index % 2 == 0 ? "black" : "white")}}></div>
      <div className="place" position="4" style={{backgroundColor:(props.index % 2 == 0 ? "white" : "black")}}></div>
      <div className="place" position="5" style={{backgroundColor:(props.index % 2 == 0 ? "black" : "white")}}></div>
      <div className="place" position="6" style={{backgroundColor:(props.index % 2 == 0 ? "white" : "black")}}></div>
      <div className="place" position="7" style={{backgroundColor:(props.index % 2 == 0 ? "black" : "white")}}></div>
      <div className="place" position="8" style={{backgroundColor:(props.index % 2 == 0 ? "white" : "black")}}></div>
    </div>
  )
}

export default Chessboard;