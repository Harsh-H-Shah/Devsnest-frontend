const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
};

const deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    payload: id,
  };
};

const loadTodo = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((todos) => {
        return dispatch({
          type: 'LOAD_TODO',
          payload: todos,
        });
      });
  };
};

export { addItem, deleteItem, loadTodo };
