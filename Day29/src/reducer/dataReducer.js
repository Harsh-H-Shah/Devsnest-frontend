export const dataReducer = (state={}, action) => {
  if(action.type==="UPDATE_WEATHER"){
    return action.payload;
  }
  return state;
}