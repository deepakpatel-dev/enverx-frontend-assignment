import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  addTransaction,
  fetchTransactions
} from "../src/Redux/actions/transactionActions";
import { ADD_TRANSACTION, FETCH_TRANSACTIONS } from "../src/Redux/type";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test("dispatches ADD_TRANSACTION action with correct data", () => {
  const store = mockStore({});
  const transactionData = {
    description: "Test Transaction",
    amount: 100,
    category: "Expense"
  };

  // Dispatch the addTransaction action
  store.dispatch(addTransaction(transactionData));

  // Test if the ADD_TRANSACTION action is dispatched with the correct data
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: ADD_TRANSACTION,
    payload: transactionData
  });
});

test("dispatches FETCH_TRANSACTIONS action with fetched data", async () => {
  const store = mockStore({});
  // Assuming you have a mock function for fetching transactions from Firestore
  const fetchMock = jest.fn(() => [{ id: "1", description: "Transaction 1" }]);

  // Dispatch the fetchTransactions action
  await store.dispatch(fetchTransactions(fetchMock));

  // Test if the FETCH_TRANSACTIONS action is dispatched with the correct data
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: FETCH_TRANSACTIONS,
    payload: [{ id: "1", description: "Transaction 1" }]
  });
});
