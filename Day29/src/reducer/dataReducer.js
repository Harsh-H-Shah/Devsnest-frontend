export const dataReducer = (state={}, action) => {
  if(action.type==="UPDATE_CITY_WEATHER"){
    return action.payload;
  }
  return state;
}