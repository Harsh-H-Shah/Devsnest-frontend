import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { cityReducer } from "./cityReducer";

export const rootReducer = combineReducers({
  data:dataReducer, city:cityReducer
})