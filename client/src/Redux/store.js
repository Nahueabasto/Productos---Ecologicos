import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducer"; 
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); 


export default store;