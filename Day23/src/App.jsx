import React, { useState } from 'react'
import './App.css'
import useToggle from './customHooks/useToggle'

function App() {
  const [cur , toggle] = useToggle(0)

  return (
    <div>
      <div className="toggle">
      {cur ? <h1>Its True</h1> : <h1>Its False</h1>}
			<button onClick={toggle}>click</button>
      </div>
    </div>
  )
}

export default App
