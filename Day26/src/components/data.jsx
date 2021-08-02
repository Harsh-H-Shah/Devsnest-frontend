import React from 'react';
import { useSelector } from 'react-redux';

const Data = () => {
  const state = useSelector((state) => state.userReducer);
  return (
    <div>
      <h1>Data</h1>
      <h4>Username : {state.name}</h4>
      <h4>Email : {state.email} </h4>
    </div>
  );
};

export default Data;
