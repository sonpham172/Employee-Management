import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
import {routerReducer} from "react-router-redux";
import employees from "./employees";
import modals from "./modal";
import toasts from "./toast";

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  employees,
  modals,
  toasts
});

export default reducers;