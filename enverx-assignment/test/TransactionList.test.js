import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
import TransactionList from "../src/Components/TransactionList";

test("renders TransactionList component", () => {
  render(
    <Provider store={store}>
      <TransactionList />
    </Provider>
  );

  // Test if the component renders without errors
  expect(screen.getByText(/Recent Transactions/i)).toBeInTheDocument();
});

// You can write more tests to check the rendering of the transaction list and interactions with the data.
