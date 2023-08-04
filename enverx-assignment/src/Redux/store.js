import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./Reducers/transactionReducer";

const store = configureStore({
  reducer: {
    transactions: transactionReducer
  }
});

export default store;
