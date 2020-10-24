import {combineReducers} from "redux";
import { reducer as counterReducer } from './features/counter/reducer';

export const reducer = combineReducers({
  counter: counterReducer
});
