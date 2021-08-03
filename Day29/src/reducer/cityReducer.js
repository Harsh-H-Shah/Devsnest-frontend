const initialState = "Mumbai";

export const cityReducer = (state=initialState, action) => {
  if(action.type === "UPDATE_CITY_NAME"){
    return action.payload;
  }
  return state;
}