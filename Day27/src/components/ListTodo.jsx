import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../action/action';
import '../App.css';

const ListTodo = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo, index) => (
        <div className="item" key={index}>
          <h3>{todo.title}</h3>
          <button
            className="delete"
            onClick={() => {
              dispatch(deleteItem(index));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
