import React from 'react';
import { updateEmail, updateName } from '../action/action';
import { useDispatch, useSelector } from 'react-redux';

const Input = () => {
  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Input</h1>
      <label htmlFor="userame"></label>
      <input
        type="text"
        placeholder="Username"
        id="username"
        value={state.name}
        onChange={(e) => dispatch(updateName(e.target.value))}
      />
      <label htmlFor="email"></label>
      <input
        type="text"
        placeholder="Email"
        id="email"
        value={state.email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />
    </div>
  );
};

export default Input;
