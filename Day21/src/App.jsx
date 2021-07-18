import React, { useState } from 'react'
import './App.css'
import Item from './item'

function App() {
  const [title, setTitle] = useState('');
  const [calorie, setCalorie] = useState()
  const [items, setItems] = useState([]);

  const handleEdit = (title, calorie, index) => {
    console.log(title, calorie, index);
    const newState = items.map((item,idx)=> {
      if(index === idx)
        return {title, calorie}; 
      return item;
    })
    setItems(newState);
  }

  return (
    <div className="App">
      <div className="userInput">
      <input type="text"
        value={title}
        placeholder="Enter name of item"
        required
        onChange={(e) => {
        setTitle(e.target.value);
      }}  
      title={title}
      />
      <input type="number" 
        value={calorie}
        placeholder="calories"
        required
        onChange={(e) =>{
        setCalorie(e.target.value);
      }}
      calorie={calorie}
      />
      </div>
      <button className="add" onClick={()=>{
        setItems([...items,{title, calorie}]);
        setTitle("");
        setCalorie("");
      }}
      title={title}
      calorie={calorie}
      >Add</button>
      {items.map((item, index) => (
        <Item 
          key={index}
          item={item} 
          title={item.title}
          calorie={item.calorie}
          items={items} 
          setItems={setItems} 
          handleEdit={handleEdit}
          index={index}/>
      ))}
    </div>
  )
}

export default App
