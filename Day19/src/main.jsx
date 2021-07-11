import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Counter from "./counter";

function App(){
  return(
    <div className="btnContainer">
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
