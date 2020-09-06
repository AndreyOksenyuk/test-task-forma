import { createStore, combineReducers } from "redux";
import forma from './forma-reducer';

const reducers = combineReducers({
   forma,
})

export const store = createStore(reducers)

 
