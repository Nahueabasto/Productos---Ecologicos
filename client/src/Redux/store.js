import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducer"; 
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const loggingMiddleware = (store) => (next) => (action) => {
    console.log('Action:', action.type);
    console.log('Previous State:', store.getState().shoppingCart);
    const result = next(action);
    console.log('Next State:', store.getState());
    return result;
  };
  
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); 


export default store;