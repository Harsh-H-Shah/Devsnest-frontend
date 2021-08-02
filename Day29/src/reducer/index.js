import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { cityReducer } from "./cityReducer";

export const rootReducer = combineReducers({
  dataReducer, cityReducer
})