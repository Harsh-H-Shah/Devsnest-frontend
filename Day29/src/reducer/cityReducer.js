import { updateWeather } from "../action/action"

export const cityReducer = (state="Mumbai", action) => {
  if(action.type === "UPDATE_CITY"){
    return action.payload;
  }
  return state;
}