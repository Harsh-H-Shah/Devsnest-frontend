import React,{useState} from 'react';
import Card from './card';
import './index.css';

function App(){
  const items = [{ title:"Pizza", calories:"120"},
  { title:"Burger", calories:"161"},
  { title:"Rice", calories:"80"},
  { title:"Oats", calories:"100"},
  { title:"Pastry", calories:"300"},
  { title:"Carrot", calories:"62"},
  { title:"Cheese-cake", calories:"524"}]

  const [Food,setArr] = useState(items);

  const Delete = n => {
    setArr(
      Food.filter((element) => {
        return element.title != n
      }),
    )
  }
  return (
    <div className='container'>
      {Food.map(({title,calories}, idx)=>(
        <Card
          idx = {idx}
          key={idx}
          title={title}
          calories = {calories}
          Delete = {Delete}
        />
      ))}
    </div>
  )
}

export default App;