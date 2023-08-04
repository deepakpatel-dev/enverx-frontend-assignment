import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";

const rootReducer = combineReducers({
  // Add all your individual reducers here
  transactions: transactionReducer
  // Add more reducers as needed
});

export default rootReducer;
