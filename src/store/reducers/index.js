import { createStore, combineReducers } from "redux";
import Auth from "./AuthReducer";

const store = createStore(
  combineReducers({
    Auth,
  })
);

export default store;
