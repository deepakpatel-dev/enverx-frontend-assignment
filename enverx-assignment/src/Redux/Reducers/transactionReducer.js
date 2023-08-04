import { ADD_TRANSACTION, FETCH_TRANSACTIONS } from "../type";

const initialState = {
  transactions: []
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    default:
      return state;
  }
};

export default transactionReducer;
