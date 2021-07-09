import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Card from "./card"
import Chessboard from "./chessboard";

function App(){
  return (
    <div className="app">
      <Card />
      <Chessboard />
    </div>
  );
}

// class card extends React.Component {}
ReactDOM.render(<App />, document.getElementById("root"));
