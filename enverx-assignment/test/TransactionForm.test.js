import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
import TransactionForm from "../src/Components/TransactionForm";

test("renders TransactionForm component", () => {
  render(
    <Provider store={store}>
      <TransactionForm />
    </Provider>
  );

  // Test if the form elements are rendered
  expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Amount/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
});

test("dispatches addTransaction action when form is submitted", () => {
  render(
    <Provider store={store}>
      <TransactionForm />
    </Provider>
  );

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/Description/i), {
    target: { value: "Test Transaction" }
  });
  fireEvent.change(screen.getByLabelText(/Amount/i), {
    target: { value: "100" }
  });
  fireEvent.change(screen.getByLabelText(/Category/i), {
    target: { value: "Expense" }
  });

  // Submit the form
  fireEvent.click(screen.getByText(/Submit/i));

  // Test if the addTransaction action is dispatched with the correct data
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: "ADD_TRANSACTION",
    payload: {
      description: "Test Transaction",
      amount: "100",
      category: "Expense"
    }
  });
});
