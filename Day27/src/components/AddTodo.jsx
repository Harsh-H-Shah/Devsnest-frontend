import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, loadTodo } from '../action/action';

const AddTodo = () => {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="addTodo">
      <input
        type="text"
        id="myInput"
        placeholder="Task"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        className="addBtn"
        onClick={() => {
          dispatch(
            addItem({
              title: item,
              done: false,
            })
          );
          setItem('');
        }}
      ></button>
      <button
        onClick={() => {
          dispatch(loadTodo());
        }}
      >
        Load Todo
      </button>
    </div>
  );
};

export default AddTodo;
