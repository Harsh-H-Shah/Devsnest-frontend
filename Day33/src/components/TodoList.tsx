import React from 'react';

interface TodoListProps {
  title: string;
  done: boolean;
}

const TodoList = ({ title, done }: TodoListProps) => {
  return (
    <div>
      <h6>{title}</h6>
    </div>
  );
};

export default TodoList;
