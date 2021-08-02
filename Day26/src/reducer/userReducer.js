const initialState = { name: '', email: '' };

const userReducer = (state=initialState, action) => {
  if (action.type === 'UPDATE_NAME') {
    return { ...state, name: action.payload };
  }
  if (action.type === 'UPDATE_EMAIL') {
    return { ...state, email: action.payload };
  }
  return state
};

export default userReducer;