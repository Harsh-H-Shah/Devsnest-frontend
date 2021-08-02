import React from 'react';

export const updateName = (input) => {
  return (
    {
      type:"UPDATE_NAME",
      payload:input
    }
  )
}

export const updateEmail = (input) => {
  return (
    {
      type:"UPDATE_EMAIL",
      payload:input
    }
  )
}