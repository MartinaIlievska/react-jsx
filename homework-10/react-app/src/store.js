
import guessReducer from "./reducers/GameReducer";
import { combineReducers } from "redux";

export const store = combineReducers({
    guesser: guessReducer,
  })
